This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## -------------------------- PUSH TO CPANEL ------------------------------------
Here is exactly how to push this to your cPanel step-by-step:

### Step 1: Generate the Production Build
Stop your local dev server (`Ctrl + C` in the CLI) and run this command:
```bash
npm run build
```
Because of the modifications we made to `next.config.ts`, this will automatically generate an `out/` folder in your project directory containing the complete HTML, CSS, and JS files for your website.

### Step 2: Zip the Folder
Once the build is completely finished, go into your file explorer, right-click the `out` folder, and **Compress/Zip** it. (Name it something like `upload.zip`).

### Step 3: Upload to cPanel
1. Log into your cPanel dashboard.
2. Open the **File Manager**.
3. Navigate to your website's root folder (usually `public_html`).
4. Click **Upload** at the top and select your newly created `upload.zip` file.

### Step 4: Extract and Clean Up
1. Once it's 100% uploaded, go back to the File Manager.
2. Right-click on `upload.zip` and select **Extract**.
3. *Important*: If it extracts into a folder named `out`, you need to move all of the files *inside* the `out` folder directly into the `public_html` root folder so they aren't hidden behind an `/out/` path.
4. You can delete the `upload.zip` file to save space.

### Optional, but highly recommended Step 5: Clean URLs (`.htaccess`)
Next.js outputs pages like `about.html` and `pastor-corner.html`. If you want visitors to just type `/about` instead of `/about.html`, make sure you have this inside a `.htaccess` file in your `public_html` folder:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

That's it! As soon as the files are extracted, your new fully dynamic (but statically hosted!) platform will be live at `gofamintpsogba.org.ng`. When you add new images or messages to your DB tomorrow, the site will update automatically without you ever repeating this process!
