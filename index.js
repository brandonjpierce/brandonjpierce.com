#!/usr/bin/env node
const Listr = require('listr');
const postcss = require('./tasks/postcss');
const purify = require('./tasks/purify');
const htmlmin = require('./tasks/htmlmin');

const tasks = new Listr([{
  title: 'Running PostCSS',
  task: postcss,
}, {
  title: 'Running Minify HTML',
  task: htmlmin,
}, {
  title: 'Running Purify',
  task: purify,
}]);

tasks.run().catch(err => console.log(err));
