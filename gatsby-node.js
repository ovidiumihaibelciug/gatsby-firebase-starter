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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  routes.forEach(item => {
    const regex = new RegExp(`${item.path}`, 'g');
    if (page.path.match(regex)) {
      page.matchPath = `${item.path}/*`;
      // Update the page.
      createPage(page);
    }
  });
};
