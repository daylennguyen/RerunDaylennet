<p align="center">
  <a href="https://daylen.net">
    <img
      src="/read/banner.svg"
      alt="daylen-web-banner"
      title="dn-banner"
    />
  </a>
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/xenodochial-shaw-0343de/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/f14927b2-9b31-4c3f-8d71-2f15e9dd8652/deploy-status"
      alt="Netlify Status"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
  <a href="https://bulma.io">
  <img src="https://bulma.io/images/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="24">
</a>
<p align="center">
  <br/>
<a href="https://daylen.net">
<strong>Website Link</strong>
</a>
</p>

</p>

<p align="center">
  <em>Note</em>: This repo is based upon the 
  <a href="https://github.com/netlify-templates/gatsby-starter-netlify-cms">Netlify CMS and Gatsby Starter</a>. <br/>
  Do you have suggestions or feedback?<a href="https://github.com/daylennguyen/RerunDaylennet/issues/new"> Open an issue</a>
</p>
  
## Features
- [X] [🕶 `Gatsby v2` for Static page generation](https://github.com/gatsbyjs/gatsby/projects/2) 
- [X] [🕶 `gatsby-plugin-purgecss` for Stylesheet overhead reduction](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/)
- [X] [🍌 `bulma` CSS baseline && Bulma builds are usually ~170K but reduced 90% by purgecss.](https://bulma.io/). 
- [ ] `🤩 Page Transitions`, component-based (with no-js support)
- [ ] 👮‍♂️ `IntersectionObserver`, component-based (with polyfill)
  
## File Structure

- [`src/pages/`](src/pages/)

  > One may observe that much of the site data is pulled from these directories
  > When using the Netlify CMS admin panel to creating postings, the postings made are contained within these folders.  
  > The `.md` files are parsed (corresponding to the config.yml) for data and stored within GraphQL.
  > This data is then queried within the our template files
  > One should note that Gatsby translates all of the contents within this directory into pages.
  > For instance, if we deploy and visit `https://www.website.com/contact/thanks` we will receive
  >
  > `TL;DR pages/ contains the data to be displayed by templates/`

- [`static/admin/config.yml`](/static/admin/config.yml)

  > The CMS will use this configuration to parse the `.md` files.
  > configure/declare the interchangeable data within each page. This is core in creating re-usable page templates within Netlify CMS
  > [Collection Types](https://www.netlifycms.org/docs/collection-types/)  
  > [Configuration Options](https://www.netlifycms.org/docs/configuration-options/) > [Add to your site](https://www.netlifycms.org/docs/add-to-your-site/#collections)

- [`src/templates/*.js`](src/templates)

  > at the bottom of each template, you will see that we are creating a graphql query to retrieve the previously parsed data.
  > Within these files we are defining how we _display_ the pages.

- [`src/cms/cms.js`](src/cms/cms.js)
  > A key step in templating your pages is to register them
  > Once this is completed, they should be available in the admin panel.

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ npm run serve
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.
