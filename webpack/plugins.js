const webpack = require("webpack");
const os = require("os");
const config = require("config");
const path = require("path");

const IconFontPlugin = require("icon-font-loader").Plugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HappyPack = require("happypack");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const HtmlWebpackPrerenderPlugin = require("html-webpack-prerender-plugin");

// TODO: https://survivejs.com/webpack/optimizing/build-analysis/

// per-environment plugins
const environmentPlugins = (() => {
  if (config.get("minify")) {
    return [
      new CompressionPlugin({
        algorithm: "gzip",
        test: /\.(js|html|css)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ];
  }

  switch (process.env.NODE_ENV) {
    case "development":
      return [
        // Hot reloading is set up in webpack-dev-server.js
      ];

    default:
      return [];
  }
})();

module.exports = {
  default: [
    new webpack.WatchIgnorePlugin({
      paths: [path.resolve(__dirname, "../dist/")],
    }),

    // Show a nice progress bar on the console.
    new ProgressBarPlugin({
      clear: false,
    }),

    // ...(process.env.ANALYZE
    //   ? [new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)()]
    //   : []),
  ],
  clientProd: [
    // new HtmlWebpackPlugin({
    //   template: "!!prerender-loader?string!index.html",
    //   inject: "body",
    // }),
    // new HtmlWebpackPrerenderPlugin({ main: "#app" }),
    // new HtmlWebpackPlugin({
    //   template: "./modules/client/index.html",
    //   inject: "body",
    // }),
  ],
  clientDev: [
    // new HtmlWebpackPlugin({
    //   template: "./modules/client/index.html",
    //   inject: "body",
    // }),
  ],
  client: [
    new ImageminPlugin(),
    // clean-webpack-plugin to clean /dist/ every build

    // TODO better than EnvironmentPlugin and DefinePlugin?
    new Dotenv(),

    // TODO: compared to DefinedPlugin?
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),

    // Define global letiables in the client to instrument behavior.
    new webpack.DefinePlugin({
      // Flag to detect non-production
      __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      __TEST__: "false",

      // SSR
      "process.env.BROWSER": "true",

      "process.env.SERVER_URL": JSON.stringify(process.env.SERVER_URL),

      // Allow checking of USE_FAKE_DATA in client (mainly for the big bad reset button)
      "process.env.USE_FAKE_DATA": JSON.stringify(process.env.USE_FAKE_DATA),

      // ALlow switching on NODE_ENV in client code
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),

      "process.env.PRISMA_API": JSON.stringify(process.env.PRISMA_API),

      "process.env.GTM": JSON.stringify(process.env.GTM),
      "process.env.GTA_ID": JSON.stringify(process.env.GTA_ID),

      "process.env.CLOUDFRONT_URL": JSON.stringify(process.env.CLOUDFRONT_URL),
      "process.env.POLL_INTERVAL": JSON.stringify(process.env.POLL_INTERVAL),
      "process.env.ERROR_REFETCH_DELAY": JSON.stringify(
        process.env.ERROR_REFETCH_DELAY
      ),
      "process.env.MAPBOX_API_KEY": JSON.stringify(process.env.MAPBOX_API_KEY),
      "process.env.GMAPS_API_KEY": JSON.stringify(process.env.GMAPS_API_KEY),
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename:
      //   process.env.NODE_ENV === "development"
      //     ? "[name].[chunkhash].css"
      //     : "[name].css",
      // chunkFilename:
      //   process.env.NODE_ENV === "development"
      //     ? "[name].[chunkhash].css"
      //     : "[name].css",
      filename: "client.[id]-[contenthash].css",
      // process.env.NODE_ENV === "development"
      //   ? "[name].[fullHash].css"
      //   : "[name].css",
      chunkFilename: "client.[id]-[contenthash].css",
      // process.env.NODE_ENV === "development"
      //   ? "[fullHash].[name].css"
      //   : "[name].css",
    }),

    new HtmlWebpackPlugin({
      template: "./modules/client/index.html",
      inject: "body",
    }),

    // Extract embedded css into a file
    // new ExtractTextPlugin(
    //   config.get("minify") ? "[name].[chunkhash].css" : "[name].css"
    // ),

    // new webpack.debug.ProfilingPlugin({
    //   outputPath: "client-build.json"
    // }),

    // new HappyPack({
    //   id: "ts",
    //   threads: process.env.CI ? 1 : Math.max(1, os.cpus().length / 2 - 1),
    //   loaders: [
    //     {
    //       path: "ts-loader",
    //       query: { happyPackMode: true, configFile: "tsconfig.client.json" },
    //     },
    //   ],
    // }),
    // new ForkTsCheckerWebpackPlugin({
    //   // https://github.com/Realytics/fork-ts-checker-webpack-plugin#options
    //   useTypescriptIncrementalApi: true,
    // }),

    // new webpack.ProvidePlugin({
    //   WaveSurfer: "wavesurfer.js",
    // }),

    // new IconFontPlugin(),
  ].concat(environmentPlugins),
};
