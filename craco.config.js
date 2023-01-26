module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.filename = 'static/js/[name].js';
      webpackConfig.output.chunkFilename = 'static/js/[name].chunk.js';

      //CSS Overrides
      webpackConfig.plugins[3].filename = 'static/css/[name].css';

      return webpackConfig;
    },
  },

};
