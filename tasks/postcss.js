const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssMqpacker = require('css-mqpacker');
const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const { css, dist } = require('./shared');

const plugins = [
  postcssImport(),
  postcssCustomMedia(),
  postcssCustomProperties(),
  autoprefixer(),
  cssMqpacker(),
  cssnano({ discardComments: { removeAll: true } }),
];

const cssContent = fs.readFileSync(css, 'utf8');
const cssDestination = path.join(dist, 'style.css');

module.exports = () => postcss(plugins)
  .process(cssContent, { from: css, to: cssDestination })
  .then(result => Promise.resolve(fs.writeFileSync(cssDestination, result.css)));
