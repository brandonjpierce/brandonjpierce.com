const path = require('path');

const src = path.resolve('src');
const dist = path.resolve('dist');
const html = path.resolve(src, 'index.html');
const css = path.resolve(src, 'style.css');

module.exports = {
  src,
  dist,
  html,
  css,
};
