'use strict';

module.exports = [
  {
    path: '/post',
    collection: 'posts',
    slug: 'title',
    context: ['title'],
    fileName: 'post',
  },
  {
    path: '/comment',
    collection: 'comments',
    slug: 'id',
    context: ['id'],
    fileName: 'comment',
  },
];
