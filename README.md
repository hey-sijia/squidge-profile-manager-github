# ao3-fake-profile-manager

**1.0.0 — Fake Social Media Profile Manager**

---

**What is the Profile Manager?**

The Profile Manager is a local tool for creating and storing fake social media profiles for use in multimedia AO3 fics. For each profile you can store an avatar image, a username, a display name if applicable (Twitter/X only), and a platform tag. From there you can copy any of those values directly into your workskin builder with one click.

**Step 1 — Create a Squidge account**

Squidge.org is a free image hosting service used to store your avatar images. You need an account to get an API key.

1. Go to [squidge.org](https://squidge.org) and click **Sign Up**
2. Fill in a username, email, and password and confirm your account
3. Once logged in, you're ready to find your API key

**Step 2 — Find your Squidge API key**

1. Log into your Squidge account
2. Click your profile picture or username in the top right corner
3. Go to **Settings**
4. Look for the **API** section — your API key will be listed there
5. Copy the key — it starts with `chv_`

**Step 3 — Start the proxy**

The Profile Manager uploads images through a local proxy that runs on your machine. You need to start it every time you use the tool.

1. Open **Terminal** (Spotlight → type Terminal)
2. Navigate to your Profile Manager folder. Type `cd ` with a space, then drag your folder from Finder into the Terminal window, then press enter
3. Run the following command:

```
node proxy.js
```

4. You should see:
```
Squidge proxy running at http://localhost:16890
Keep this terminal open while using the profile manager.
```

Leave this terminal window open the entire time you're using the tool.


**Step 4 — Enter your API key**

In the Profile Manager, paste your Squidge API key into the **API key** field at the top of the left panel and click **Save**. You only need to do this once — it is stored in your browser for future sessions.


**Using the tool**

To add a profile:
1. Either add a new image or drag an image onto the **Upload avatar** drop zone — it will upload to Squidge and auto-fill the Avatar URL field
2. Select a platform (Twitter, Tumblr, or Reddit)
3. Enter or generate a display name and username
4. Click **Save profile**

To use a profile in your workskin builder, find it in the table and click **PROFILE IMAGE URL**, **Name**, or **USERNAME** to copy each value individually.

To filter profiles by platform, use the **All / Twitter / Tumblr / Reddit** chips at the top of the table.

To export all profiles as a CSV, click **Export CSV**. To import a previously exported CSV, click **Import CSV** — the tool will flag any duplicates and let you choose to skip or overwrite them individually.
