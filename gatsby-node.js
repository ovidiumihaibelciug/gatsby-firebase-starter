// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.

// const path = require(`path`);

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   // const app = firebase.initializeApp(config);

//   const blogPostTemplate = path.resolve(`src/templates/post.js`);

//   // app.firestore().collection('posts')
//   //   .get()
//   //   .then(querySnapshot => {
//   //     console.log(querySnapshot.docs);
//   //     querySnapshot.docs.forEach(item => {
//   //       const post = item.data();

//   createPage({
//     // Path for this page — required
//     path: `/post/asd`,
//     component: blogPostTemplate,
//     context: {
//       // Add optional context data to be inserted
//       // as props into the page component..
//       //
//       // The context data can also be used as
//       // arguments to the page GraphQL query.
//       //
//       // The page "path" is always available as a GraphQL
//       // argument.
//     },
//   });
//   // });
// };

const path = require(`path`);

const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyDbWIS7NPu5bZ7dOvMjleTYnYasTdm8qSA',
  authDomain: 'mywebcomponentss.firebaseapp.com',
  databaseURL: 'https://mywebcomponentss.firebaseio.com',
  projectId: 'mywebcomponentss',
  storageBucket: 'mywebcomponentss.appspot.com',
  messagingSenderId: '45231235288',
  appId: '1:45231235288:web:d6f40793a0d70703',
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/post.js`);

  const app = firebase.initializeApp(config);

  await app
    .firestore()
    .collection('posts')
    .get()
    .then(querySnapshot => {
      console.log(querySnapshot.docs);
      querySnapshot.docs.forEach(item => {
        const post = item.data();
        createPage({
          // Path for this page — required
          path: `/post/${post.title}`,
          component: blogPostTemplate,
          context: {
            id: post.title,
          },
        });
      });
    });
};
