'use strict';

module.exports = [
  {
    path: '/post',
    collection: 'posts',
    param: 'title',
    context: ['title', 'description'],
    fileName: 'post',
  },
  // {
  //   path: '/comment',
  //   collection: 'comments',
  //   param: 'id',
  //   context: ['id'],
  //   fileName: 'comment',
  // },
];
