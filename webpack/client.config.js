const config = require("config");
const path = require("path");
const webpack = require("webpack");
const loaders = require("./loaders");
const plugins = require("./plugins");
const { defaults } = require("lodash");

const os = require("os");
const DEV_PORT = config.get("devServer.port");

const PROXY_HOST = config.get("server.apiHost");

// const { hot, inline, noInfo, liveReload } = defaults(config.get("devServer"), {
//   hot: false,
//   inline: false,
//   noInfo: false,
//   liveReload: false,
// });

let hot = true;
let injectHot = true;
let inline = true; // show/hide black top-bar
let noInfo = true;
let liveReload = false;

console.info(
  "PROCESS WEBPACK CLIENT on ",
  process.env.NODE_ENV,
  process.env.FULLSTORY_ORG
);
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    client: ["./index.ts"],
  },

  // devServer: {
  //   hot: false,
  // },

  optimization: config.get("minify")
    ? {
        runtimeChunk: true,
        splitChunks: {
          chunks: "all",
          // cacheGroups: {
          //   commons: {
          //     test: /[\\/]node_modules[\\/]/,
          //     name: "vendors",
          //     chunks: "all",
          //   },
          // },
        },
      }
    : undefined,

  performance: {
    assetFilter(filename) {
      // Don't size test uncompressed javascript - we just care about the .js.gz files
      return !/\.(js|map)$/.test(filename);
    },
  },

  // https://github.com/TypeStrong/ts-loader#transpileonly-boolean-defaultfalseO
  stats: {
    warningsFilter: /export .* was not found in/,
  },

  devtool: process.env.NODE_ENV === "development" ? "eval-source-map" : false,

  plugins:
    process.env.NODE_ENV === "production"
      ? [...plugins.default, ...plugins.client, ...plugins.clientProd]
      : [...plugins.default, ...plugins.client, ...plugins.clientDev],

  // node: {
  //   fs: "empty",
  // },

  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "client.[name]-[id]-[contenthash].js",
    // process.env.NODE_ENV === "development" ? "client.[fullHash].js" : "client.js",
    libraryTarget: "umd", // important for html-webpack-prerender-plugin
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: ["node_modules"],
    alias: {
      // "@material-ui/core": "@material-ui/core/es",
      // wavesurfer: require.resolve("wavesurfer.js"),
      "react-dom": "@hot-loader/react-dom",
    },
  },

  module: {
    rules: [
      // loaders.prettier,
      // loaders.eslint,
      // process.env.NODE_ENV === "production" ? loaders.html : {},
      loaders.clientSideTypeScript,
      loaders.clientSideSass,
      loaders.clientSideLess,
      loaders.clientSideCss,
      loaders.graphql,
    ].concat(loaders.allImagesAndFontsArray),
  },
  devServer: {
    open: true,
    publicPath: "/",
    // contentBase: "/public",
    port: DEV_PORT,
    injectHot: injectHot,
    hot,
    inline,
    noInfo,
    liveReload,
    historyApiFallback: true,
    stats: "errors-only",
    disableHostCheck: config.get("devServer.disableHostCheck"),
    proxy: {
      "/graphql/*": `http://${PROXY_HOST}`,
      "/graphiql/*": `http://${PROXY_HOST}`,
      "/auth/*": `http://${PROXY_HOST}`,
      "/arena/*": `http://${PROXY_HOST}`,
      "/api/*": `http://${PROXY_HOST}`,
    },
  },
};
