const express = require('express');
const path = require('path');

// Initialize Express application
const app = express();

// Node environment variable
const env = process.env.NODE_ENV.trim();

// Logical statement checking which node environment that we're working in
if (env === 'development') {
    // Development environment configuration below

    // Import Webpack config file
    const config = require('../../webpack.config');
    
    // Set up Webpack
    const compiler = require('webpack')(config);

    // Load Middleware and serve it through the Express application
    app.use(require('webpack-dev-middleware')(compiler, {
        // Removes a lot of compilation logging
        stats: false
    }));
    
    // Load Hot Middleware and serve it through the Express application
    app.use(require("webpack-hot-middleware")(compiler));
}
else if (env === 'production') {
    // Production environment configuration below
    
    // Serve static assets
    app.use(express.static(path.join(__dirname, '..', '..', 'build')));
    
    // Serve Website as default route
    app.use('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
    });
}

// Start the backend express server to listen for requests
app.listen(8080, () => console.log('Listening on port 8080'));