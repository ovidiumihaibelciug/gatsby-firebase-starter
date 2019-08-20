'use strict';

module.exports = {
  siteMetadata: {
    url: 'http://mywebcomponents.com',
    title: 'MyWebComponents',
    description: 'MyWebComponents',
    titleTemplate: 'MyWebComponents',
    subtitle:
      'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    copyright: '© All rights reserved.',
    disqusShortname: '',
    postsPerPage: 4,
    googleAnalyticsId: 'UA-135128268-2',
    image: 'MyWebComponents',
    twitterUsername: 'MyWebComponents',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/post/*`] },
    },
  ],
};
