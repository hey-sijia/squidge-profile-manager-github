# ao3-fake-profile-manager

**1.0.0 — Fake Social Media Profile Manager**

---

**What is the Profile Manager?**

The Profile Manager is a local tool for creating and storing fake social media profiles for use in multimedia AO3 fics. For each profile you can store an avatar image, a username, a display name if applicable (Twitter/X only), and a platform tag. From there you can copy any of those values directly into your workskin builder with one click.



**If you want to automate image upload and profile creation in one place (have to use Squidge.org)**

**Step 1 — Create a Squidge account**

Squidge.org is a free image hosting service used to store your avatar images. You need an account to get an API key.

1. Go to [images.squidge.org](https://images.squidge.org/) and click **Sign Up**
2. Fill in a username, email, and password and confirm your account
3. Once logged in, you're ready to find your API key

**Step 2 — Find your Squidge API key**

1. Log into your Squidge account
2. Click your profile picture or username in the top right corner
3. Go to **Settings**

   <img width="326" height="321" alt="image" src="https://github.com/user-attachments/assets/70cb3e0e-ab5b-46b2-9cf1-aa6e50676604" />
   
4. Look for the **API** section — your API key will be listed there
   
   <img width="824" height="77" alt="image" src="https://github.com/user-attachments/assets/c867a926-bda2-4dee-a47b-0cf276397e46" />
   
5. Copy the key — it starts with `chv_`


**Step 3 — Enter your API key**

In the Profile Manager, paste your Squidge API key into the **API key** field at the top of the left panel and click **Save**. 




**If you want to just use this as a database (use your own image hosting)**
Turn off the image upload toggle and proceed.

<img width="231" height="69" alt="image" src="https://github.com/user-attachments/assets/ac77f453-6458-49f7-842a-40ee4b260c31" />

**Using the tool**

To add a profile:
1. Either add a new image or drag an image onto the **Upload avatar** drop zone — it will upload to Squidge and auto-fill the Avatar URL field
2. Select a platform (Twitter, Tumblr, or Reddit)
3. Enter or generate a display name and username
4. Click **Save profile**

To use a profile in your workskin builder, find it in the table and click **PROFILE IMAGE URL**, **Name**, or **USERNAME** to copy each value individually.

To filter profiles by platform, use the **All / Twitter / Tumblr / Reddit** chips at the top of the table.

To export all profiles as a CSV, click **Export CSV**. To import a previously exported CSV, click **Import CSV** — the tool will flag any duplicates and let you choose to skip or overwrite them individually.
