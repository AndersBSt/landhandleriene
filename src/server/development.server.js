const path = require('path');
const express = require('express');

// Initialize Express application
const developmentServer = express();

// Import Webpack configuration file
const config = require('../../webpack/webpack.config.development');

// Initialize Webpack with configuration
const compiler = require('webpack')(config);

// Load Middleware and serve it through the Express application
developmentServer.use(require('webpack-dev-middleware')(compiler, {
    // Removes compilation logging in terminal
    stats: false
}));

// Load Hot Middleware and serve it through the Express application
developmentServer.use(require("webpack-hot-middleware")(compiler));

// Serving of the in-memory Webpack output, as output from Webpack doesn't exist on harddrive thus Express needs to find it elsewhere.
developmentServer.use('*', (req, res) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

module.exports = developmentServer;