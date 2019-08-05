const path = require(`path`);

const firebase = require('firebase');

const routes = require('./templates.js');

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

  routes.forEach(
    async ({
      collection,
      path: routePath,
      slug,
      fileName,
      context,
    }) => {
      const Template = path.resolve(`src/templates/${fileName}.js`);

      app
        .firestore()
        .collection(collection)
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.forEach(item => {
            const itemData = item.data();
            createPage({
              path: `${routePath}/${itemData[slug]}`,
              component: Template,
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
