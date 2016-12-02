const fs = require('fs');
const path = require('path');
const purify = require('purify-css');
const { dist } = require('./shared');

module.exports = () => {
  const cssContent = fs.readFileSync(path.join(dist, 'style.css'), 'utf8');
  const htmlContent = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

  return Promise.resolve(
    purify(htmlContent, cssContent, {
      output: path.join(dist, 'style.css'),
      minify: true,
    })
  );
};
