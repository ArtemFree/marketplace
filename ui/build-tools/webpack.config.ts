import type { Configuration } from "webpack";
import type { Configuration as ServerConfiguration } from "webpack-dev-server";
import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpackMockServer from "webpack-mock-server";
import ts, { ModuleResolutionKind } from "typescript";

const config: Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/app/app.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build/"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /.(ts|js|tsx|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.(svg|png|jpe?g|gif)$/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../dist/index.html"),
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".svg"],
    alias: {
      src: path.resolve(__dirname, "../src"),
    },
  },
  devServer: {
    port: 5000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    onBeforeSetupMiddleware: (server) => {
      if (!server.app) {
        return;
      }

      // webpackMockServer.use(server.app, {
      //   port: 5001,
      //   verbose: true,
      //   logRequests: false,
      //   logResponses: false,
      //   entry: [path.resolve(__dirname, "./webpack.mock.ts")],
      //   before: (req, res, next) => {
      //     // eslint-disable-next-line no-console
      //     console.log(`Got request:
      //       - method: ${req.method}
      //       - url: ${req.url}
      //       - params: ${JSON.stringify(req.params, null, 2)}`);
      //     res.once("finish", () => {
      //       // eslint-disable-next-line no-console
      //       console.log(`Sent response:
      //       - method: ${req.method}
      //       - url:  ${req.url}`);
      //     });
      //     next();
      //   },
      //   tsConfigFileName: "tsconfig.json",
      //   compilerOptions: {
      //     strictNullChecks: false,
      //     noImplicitAny: false,
      //     noUnusedLocals: false,
      //     noUnusedParameters: false,
      //     skipLibCheck: true,
      //     resolveJsonModule: true,
      //   },
      //   strictCompilerOptions: {
      //     // these options impossible to override
      //     outDir: "./dist",
      //     rootDir: process.cwd(),
      //     noEmit: false,
      //     noEmitHelpers: false,
      //     esModuleInterop: true,
      //     module: ts.ModuleKind.CommonJS,
      //     declaration: false,
      //     moduleResolution: ModuleResolutionKind.NodeJs,
      //   },
      // });
    },
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
  },
};

export default config;
