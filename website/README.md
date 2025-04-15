# Simple Website Template

A responsive website template that you can host for free with GitHub Pages and use with your own custom domain.

## How to Host This Website For Free with a Custom Domain

### Step 1: Set Up a GitHub Account

1. Go to [GitHub](https://github.com) and sign up for a free account if you don't have one already.

### Step 2: Create a New Repository

1. Click on the "+" icon in the top right and select "New repository"
2. Name your repository `username.github.io` (replace "username" with your actual GitHub username)
3. Make the repository public
4. Click "Create repository"

### Step 3: Upload Your Website Files

1. Clone the repository to your computer:
   ```
   git clone https://github.com/username/username.github.io.git
   ```
2. Copy all the files from this website folder into the repository folder
3. Push the changes to GitHub:
   ```
   git add .
   git commit -m "Initial website commit"
   git push -u origin main
   ```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

Your site will be published at `https://username.github.io`

### Step 5: Set Up a Custom Domain (Free Options)

There are several ways to get a free domain:

#### Option 1: Freenom

1. Go to [Freenom](https://www.freenom.com)
2. Search for a domain with a free TLD (.tk, .ml, .ga, .cf, or .gq)
3. Register the domain for free (you can get up to 12 months free)

#### Option 2: Use a Free Subdomain

Services like [Netlify](https://www.netlify.com) or [Vercel](https://vercel.com) offer free subdomains with your site name.

### Step 6: Configure Your Custom Domain with GitHub Pages

1. In your GitHub repository, go to "Settings" > "Pages"
2. Under "Custom domain", enter your domain name
3. Click "Save"
4. Check "Enforce HTTPS" after the DNS propagation is complete

### Step 7: Configure DNS Records

#### If using a custom domain (like from Freenom):

Add these DNS records at your domain registrar:

1. A Records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
2. CNAME Record:
   - Name: www
   - Value: username.github.io

#### If using a subdomain from Netlify/Vercel:

Follow their specific instructions for connecting to GitHub.

### Step 8: Wait for DNS Propagation

DNS changes can take up to 48 hours to propagate. Once complete, your website will be accessible via your custom domain!

## Customizing Your Website

1. Edit the `index.html` file to change the content
2. Modify `css/style.css` to change the appearance
3. Update `js/script.js` to add custom functionality

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Free DNS Configuration](https://help.github.com/articles/setting-up-an-apex-domain/) 