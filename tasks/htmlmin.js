const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier');
const { html, dist } = require('./shared');


module.exports = () => {
  const htmlDestination = path.join(dist, 'index.html');
  const htmlContent = fs.readFileSync(html, 'utf8');
  const newHtml = minify(htmlContent, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyURLs: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
  });

  return Promise.resolve(fs.writeFileSync(htmlDestination, newHtml));
};
