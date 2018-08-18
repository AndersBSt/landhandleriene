# Landhandleriene

If it fails during compilation due to some calc or property error. Simply run `npm install less@3.0.4 --save-dev` in the command line. If that doesn't work, uninstall less with `npm uninstall less --save-dev` then run the command prior to that command.

## Table of Contents

- [Resources/Tutorials/Pages](#resources/tutorials/pages)
  - [Webpack and Babel Setup](#webpack-and-babel-setup)
  - [HTML Webpack Plugin](#html-webpack-plugin)
  - [Development Server Setup](#development-server-setup)
  - [In-Memory Serving of Webpack Output during Development](#in-memory-serving-of-webpack-output-during-development)
  - [Production Server Setup](#production-server-setup)

## Resources/Tutorials/Pages

### Webpack and Babel Setup
The most minimal Webpack and Babel setup for it to work.
- [The minimal React + Webpack 4 + Babel Setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/).

### HTML Webpack Plugin
Documentation and instructions page for HTML Webpack Plugin, that's useful for generating an index.html file in build folder.
- [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin).

### Development Server Setup
Useful guide for understanding how to integrate and create a development server in Express with hot reloading.
- [Live Reload / Hot Module Replacement with Webpack Middleware](https://blog.cloudboost.io/live-reload-hot-module-replacement-with-webpack-middleware-d0a10a86fc80).

### In-Memory Serving of Webpack Output during Development
Simple fix for serving the output from Webpack with Express during development. Since the output is stored in-memory, Express can't find HTML or bundle files on the harddrive and thus this causes differing behaviour between development and build. Essentially solves some problems that are in development mode, but are non-existant in production. For example getting the `Cannot GET /Page` problem with React-Router during development that is explained [here](https://tylermcginnis.com/react-router-cannot-get-url-refresh/).
- [HtmlWebpackPlugin + webpack-dev-middleware other pathname than /](https://github.com/jantimon/html-webpack-plugin/issues/145)

### Production Server Setup
A simple tutorial on how to serve build files with a production server in Express
- [How to get create-react-app to work with a Node.js back-end API](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0).
