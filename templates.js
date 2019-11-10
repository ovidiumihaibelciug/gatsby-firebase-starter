'use strict';

module.exports = [
  {
    path: '/post', // the url of the page, example /post/post-slug
    collection: 'posts', // the name of the collection from firestore
    param: 'slug', // the parameter from url, the equivalent of /post/:param
    context: ['slug', 'title', 'description'], // the fields from the collection that will be requested at build time, then you can access the data from this.props.pageContext
    fileName: 'post', // the file from pages folder
  },
];
