const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withTM = require('next-transpile-modules');

module.exports = withPlugins([optimizedImages]);

// module.exports = withPlugins([optimizedImages, [withTM, {
//   transpileModules: ['ky'],
// }]]);