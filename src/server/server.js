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
        stats: false,
        //
        publicPath: '/'
    }));
    
    // Load Hot Middleware and serve it through the Express application
    app.use(require("webpack-hot-middleware")(compiler));

    // Serving of the in-memory Webpack output, as output from Webpack doesn't exist on harddrive thus Express needs to find it elsewhere.
    app.use('*', (req, res) => {
        var filename = path.join(compiler.outputPath, 'index.html');
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
}
else if (env === 'production') {
    // Production environment configuration below
    
    // Serve static assets
    app.use(express.static(path.join(__dirname, '..', '..', 'build')));
    
    // Serve index.html as default route
    app.use('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
    });
}

// Start the backend express server to listen for requests
app.listen(8080, () => console.log('Listening on port 8080'));