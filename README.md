# andrewjk.fyi

🚧 WARNING: WORK IN PROGRESS 🚧

This is the source code for my [Redraft](https://github.com/andrewjk/redraft) site at https://andrewjk.fyi, hosted on a Cloudflare Worker.

You may find it useful as a reference for setting up your own site.

Alternatively, you can pay for a hosted account at https://redraft.social for $4.99 per month. At any time, you can take your data and move to a self-hosted solution.

## You will need

- A GitHub account
- A Cloudflare account
  - A D1 database
  - An R2 storage bucket

## Setup

### Create the site

Use `npm` (or your preferred package manager) to create the template site:

```bash
npm init @redraft/site my-social --cloudflare
cd my-social
npm install
```

Replace any values in triangle brackets in the `wrangler.jsonc` file.

Optionally customise css, icon and robots.txt in `/src/assets`.

Once you are happy, upload it to your GitHub account.

### Create the Cloudflare Worker

- Connect it to your GitHub project
- Set the environment variables
  - Set `USERNAME` and `PASSWORD`, which will be used to setup your account
  - Set `SITE_LOCATION` to the URL which will be shared with others
  - Set `JWT_SECRET` to a random passphrase for encrypting your user token
  - Set `JWT_SECRET_2` to a random passphrase for encrypting the user tokens you share with contacts
- Run `npm run db:push` to create the database

### Set up your account

- Go to `SITE_LOCATION/account/setup` to create your account

### Keep it up to date

- Regularly run `npm update` and `npm run db:push`
