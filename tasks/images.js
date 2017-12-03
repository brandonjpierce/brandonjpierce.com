const path = require('path');
const fs = require('fs-extra');
const { src, dist } = require('./shared');

module.exports = () => {
  const faviconIco = path.join(src, 'favicon.ico');
  const favicon16 = path.join(src, 'favicon-16x16.png');
  const favicon32 = path.join(src, 'favicon-32x32.png');

  fs.copySync(faviconIco, path.join(dist, 'favicon.ico'));
  fs.copySync(favicon16, path.join(dist, 'favicon-16x16.png'));
  fs.copySync(favicon32, path.join(dist, 'favicon-32x32.png'));

  return Promise.resolve();
};
