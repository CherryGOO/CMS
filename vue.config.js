module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  devServer: {
    port: 831,
    // open: true,
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  lintOnSave: false,
  configureWebpack: (config) => {
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console =
      process.env.NODE_ENV === "production";
    // provide the app's title in webpack's name field, so that
    config.externals = {
      resolve: {
        alias: {
          assets: "@/assets",
          con: "@/components",
          views: "@/views",
        },
      },
    };
  },
};
