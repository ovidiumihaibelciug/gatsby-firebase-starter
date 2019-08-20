const path = require('path');

const firebase = require('firebase');

const routes = [
  {
    path: '/post',
    collection: 'posts',
    slug: 'title',
    context: ['title'],
    fileName: 'post',
  },
  // {
  //   path: '/comment',
  //   collection: 'comments',
  //   slug: 'id',
  //   context: ['id'],
  //   fileName: 'comment',
  // },
];

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

  const app = firebase.initializeApp(config);
  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  await routes.map(
    async ({
      collection,
      path: routePath,
      slug,
      fileName,
      context,
    }) => {
      await app
        .firestore()
        .collection(collection)
        .get()
        .then(async querySnapshot => {
          querySnapshot.docs.forEach(async item => {
            const itemData = item.data();
            await createPage({
              path: `${routePath}/${itemData[slug]}`,
              component: blogPost,
              context: context.reduce((acc, curr) => {
                acc[curr] = itemData[curr];
                return acc;
              }, {}),
            });
          });
        });
    },
  );
};
