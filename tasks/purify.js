const fs = require('fs');
const path = require('path');
const purify = require('purify-css');
const { dist } = require('./shared');

module.exports = () => {
  const cssContent = fs.readFileSync(path.join(dist, 'style.css'), 'utf8');
  const htmlContent = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
  const purifyOptions = { minify: true };

  return new Promise(resolve => {
    purify(htmlContent, cssContent, purifyOptions, result => {
      const inline = htmlContent.replace('__STYLES__', result);
      fs.writeFileSync(path.join(dist, 'index.html'), inline);
      resolve();
    });
  });
};
