const config = require("config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // prettier: {
  //   enforce: "pre",
  //   test: /\.(tsx?|jsx?)/,
  //   exclude: /node_modules/,
  //   loader: "prettier-loader"
  // },

  html: {
    test: /index.html/,
    loader: "prerender-loader?string",
  },

  eslint: {
    enforce: "pre",
    test: /\.(tsx?|jsx?)/,
    exclude: /node_modules/,
    loader: "eslint-loader",
    options: {
      fix: true,
    },
  },

  clientSideTypeScript: {
    test: /\.(tsx?|jsx?)/,
    // exclude: /data-seed/,
    // exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              { targets: { browsers: "last 2 versions" } }, // or whatever your project requires
            ],
            "@babel/preset-typescript",
            "@babel/preset-react",
          ],
          plugins: [
            // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            // "react-hot-loader/babel",
          ],
        },
      },
    ],
  },

  graphql: {
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: "graphql-tag/loader",
  },

  // see below
  // fontLoader: {
  //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
  //   loader: "url-loader",
  //   options: {
  //     limit: 10000,
  //   },
  // },

  clientSideSass: {
    test: /\.scss$/,
    use: [
      process.env.NODE_ENV !== "production"
        ? "style-loader" // style-loader enables hot css
        : MiniCssExtractPlugin.loader, // MiniCssExtractPlugin is for server and build
      "css-loader", // translates CSS into CommonJS
      "sass-loader", // compiles Sass to CSS, using Node Sass by default
      // "icon-font-loader",
    ],
  },

  clientSideLess: {
    test: /\.less$/,
    use: [
      process.env.NODE_ENV !== "production"
        ? "style-loader"
        : MiniCssExtractPlugin.loader,
      "css-loader", // translates CSS into CommonJS
      {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      }, // compiles Less to CSS, using Node Sass by default
      // "icon-font-loader",
    ],
  },

  clientSideCss: {
    test: /\.css$/i,
    use: [
      process.env.NODE_ENV !== "production"
        ? "style-loader"
        : MiniCssExtractPlugin.loader,
      "css-loader",
    ],
  },

  // css: {
  //   test: /\.css$/,
  //   use: ExtractTextPlugin.extract({
  //     fallback: "style-loader",
  //     allChunks: true,
  //     use: [
  //       {
  //         loader: "css-loader",
  //       },
  //       {
  //         loader: "postcss-loader",
  //         options: {
  //           plugins: [
  //             ...(config.get("minify")
  //               ? [
  //                   require("cssnano")({
  //                     safe: true,
  //                     sourcemap: true,
  //                     autoprefixer: false,
  //                   }),
  //                 ]
  //               : []),
  //             require("autoprefixer"),
  //           ],
  //         },
  //       },
  //     ],
  //   }),
  // },

  allImagesAndFontsArray: [
    // cache bust images, but embed small ones as data URIs
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            prefix: "img/",
            name: "assets/[name].[ext]",
            limit: 5000,
          },
        },
      ],
    },

    // cache bust svgs
    // {
    //   test: /\.svg?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //   use: [
    //     {
    //       // loader: "file-loader",
    //       loader: "url-loader",
    //       options: {
    //         limit: 7500,
    //         name: "assets/[fullHash].[ext]",
    //       },
    //     },
    //   ],
    // },

    {
      test: /\.svg$/,
      use: [
        {
          loader: "react-svg-loader",
          // options: {
          //   jsx: true
          // }
        },
      ],
    },

    // cache bust fonts
    {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "fonts/[fullHash].[ext]",
          },
        },
      ],
    },

    // Cache bust or data-uri web fonts
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 50000,
            mimetype: "application/font-woff",
            name: "fonts/[fullHash].[ext]",
          },
        },
      ],
    },
  ],
};
