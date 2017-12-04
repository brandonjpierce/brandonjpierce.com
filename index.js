#!/usr/bin/env node
const Listr = require('listr');
const images = require('./tasks/images');
const postcss = require('./tasks/postcss');
const purify = require('./tasks/purify');
const htmlmin = require('./tasks/htmlmin');

const tasks = new Listr([
  {
    title: 'Moving Image Assets',
    task: images,
  },
  {
    title: 'Running PostCSS',
    task: postcss,
  },
  {
    title: 'Running Minify HTML',
    task: htmlmin,
  },
  {
    title: 'Running Purify & Inlining CSS',
    task: purify,
  },
]);

tasks.run().catch(err => console.log(err));
