const http = require('http');
const https = require('https');

const PORT = 16890;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/upload') {
    console.log('Received upload request');
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing X-API-Key header' }));
      return;
    }

    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
      const body = Buffer.concat(chunks);
      const contentType = req.headers['content-type'] || '';

      const options = {
        hostname: 'images.squidge.org',
        path: '/api/1/upload',
        method: 'POST',
        headers: {
          'Content-Type': contentType,
          'Content-Length': body.length,
          'X-API-Key': apiKey,
        },
      };

      const proxyReq = https.request(options, proxyRes => {
        const respChunks = [];
        proxyRes.on('data', chunk => respChunks.push(chunk));
        proxyRes.on('end', () => {
          const raw = Buffer.concat(respChunks).toString();
          res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
          res.end(raw);
        });
      });

      proxyReq.on('error', err => {
        console.error('Proxy request error:', err.message);
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Proxy error: ' + err.message }));
      });

      proxyReq.write(body);
      proxyReq.end();
    });

    return;
  }
  console.log('Received unsupported request:', req.method, req.url);
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log('Squidge proxy running at http://localhost:' + PORT);
  console.log('Keep this terminal open while using the profile manager.');
});
