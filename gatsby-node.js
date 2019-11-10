const path = require('path');

const firebase = require('firebase');
const routes = require('./templates.js');
const config = require('./firebaseConfig');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const app = firebase.initializeApp(config);
  await Promise.all(
    routes.map(
      async ({
        collection,
        path: routePath,
        param,
        fileName,
        context,
      }) => {
        const Template = path.resolve(
          `./src/templates/${fileName}.js`,
        );
        await app
          .firestore()
          .collection(collection)
          .get()
          .then(async querySnapshot => {
            await Promise.all(
              querySnapshot.docs.map(async item => {
                const itemData = item.data();
                await createPage({
                  path: `${routePath}/${itemData[param]}`,
                  component: Template,
                  context: context.reduce((acc, curr) => {
                    acc[curr] = itemData[curr];
                    console.log(acc);
                    return acc;
                  }, {}),
                });
              }),
            );
          });
      },
    ),
  );
};
