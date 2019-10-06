<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Firebase starter
</h1>

Kick off your project with this gatsby firebase boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```sh
    # create a new Gatsby site using the blog starter
    gatsby new my-firebase-starter ovidiumihaibelciug/gatsby-firebase-starter
    ```

2.  **Add firebase config**

    Log in to firebase console and replace the config from `firebaseConfig.js` with your settings.

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-firebase-starter/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

5.  **Make dynamic pages**

    Open `templates.js` and add your dynamic pages like this:

    ```js
    [
      {
        path: '/post',
        collection: 'posts',
        param: 'title',
        context: ['title', 'description'],
        fileName: 'post',
      },
    ];
    ```

    1. **`path`** is the url of the page, for example `test.com/post`

    2. **`collection`** is the name of the collection from firestore, at build time this starter will retrieve and make pages with all the documents from this collection

    3. **`param`** the parameter from url, the equivalent of `/post/:param` in `React Router`

    4. **`context`** the fields from the collection that will be requested at `build` time, then you can access the data from `this.props.pageContext`. For example for this `context: ['title', 'description'],` you'll be able to get the data from here:

    ```js
    const {
      pageContext: { title, description },
    } = this.props;
    ```

    5. **`filename`** the name of the file from `templates` folder that you'll use to render the data from that collection

## ⚙️ Features

- Dynamic pages from Firestore collections
- Includes React Helmet to allow editing site meta tags
- PWA Support
- SEO
- Sign In
- Sign Up
- Sign Out
- Password Forget
- Password Change
- Verification Email
- Protected Routes with Authorization
- Social Logins with Google, Facebook and Twitter
- Linking of Social Logins on Account dashboard
- Auth Persistence with Local Storage
- Database with Users and Posts

## 🧐 What's inside?

A quick look at the folder structure.

    ├── node_modules
    ├── src
      ├── assets
      ├── components
        ├── atoms
        ├── molecules
        ├── scenes
      ├── constants
      ├── pages
      ├── styles
      ├── templates
      ├── utils

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`/components`**: This folder contains the React components structured following the [Atomic Design methodology](https://codeburst.io/atomic-design-with-react-e7aea8152957)

    3.1. **`atoms`** Atoms are the smallest possible components, such as buttons, titles, inputs.

    3.2 **`molecules`** They are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components.

    3.3 **`scenes`** This is a combination of templates and organisms. Basically these are the components that will be used directly in `/pages`

4)  **`constants`**: Some constants use throughout the app.

5)  **`pages`**: Components under src/pages become pages automatically with paths based on their file name.

6)  **`styles`**: The styles of the app. (Made with scss)

7)  **`utils`**: Firebase setup, Auth setup and reusable code used throughout the app.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ovidiumihaibelciug/gatsby-firebase-starter)

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->
