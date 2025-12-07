# Marketing Hub

---


<br/><br/>
### Requirements

---

Before continuing make sure you have the following installed on your machine:
- Node `v22.20.0`

If you require different versions of Node use [Node Version Manager](https://github.com/nvm-sh/nvm)

<br/><br/>



### Install

---

Run: `npm install`

<br/><br/>



### Setup

---

Run `npm run setup`

This will create a local environment file if one does not already exist.
Private keys can all be found in the "Shared-FrontEnd" folder on [LastPass](https://lastpass.com/)

<br/><br/>



### Launch

---

Run: `npm run dev`

The application will not start if any environment variables are missing.  
These will be listed in the console.

<br/><br/>



### Build

---

Run: `npm run static`

Build a static version of the site and run it locally.
Saved to the `out` folder.

<br/><br/>



### Reset

---

Run: `npm run reset`

This will delete the following files and folders:
- `node_modules`
- `out`
- `coverage`
- `lighthouse-report`
- `package-lock.json`

<br/><br/>



### Command Line Interface

---

- `gulp` - welcome message and a list of commands

- `gulp help` - detailed information on each command

- `gulp watch` - automatically compile and minify CSS when changes are made

- `gulp module` - create a component, ex. `gulp module --name PageTemplate`

- `gulp hook` - create a hook, ex. `gulp hook --name useFetch`

These last 2 can also be accessed using `npm`:

ex. `npm run gulp:module general/Breadcrumbs`

ex. `npm run gulp:hook useStyling`


<br><br>



### Testing

---

- `npm run lint`: runs ESLint tests

- `npm run jest`: runs Jest test

- `npm run cypress`: opens Cypress desktop UI

- `npm run cypress:headless`: runs Cypress tests without browser

- `npm run tests`: ESLint, Jest and headless Cypress

- `npm run analyze`: Analyze and display bundle sizes

- `npm run lighthouse`: Generate Lighthouse report

<br>

** **Dev server must be running or Cypress will fail** **


<br><br><br>
