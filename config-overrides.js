/* config-overrides.js */
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = function override(config, env) {
  if (env === "production") {
    config.plugins = [
      ...config.plugins.filter(
        plugin => plugin.constructor.name !== "SWPrecacheWebpackPlugin"
      ),
      new SWPrecacheWebpackPlugin({
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: "service-worker.js",
        logger(message) {
          if (message.indexOf("Total precache size is") === 0) {
            return;
          }
          if (message.indexOf("Skipping static resource") === 0) {
            return;
          }
          console.log(message);
        },
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
      })
    ];
  }
  return config;
};
