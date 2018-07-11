const express = require('express');

// Initialize Express application
const app = express();

// Node environment variable
const env = process.env.NODE_ENV.trim();

// Logical statement to check which environment Node is running in, and thus setting up Express application for that environment
if (env === 'development') {
    const developmentServer = require('./development.server.js');
    app.use(developmentServer);
}
else if (env === 'production') {
    const productionServer = require('./production.server.js');
    app.use(productionServer);
}

// Start the backend express server to listen for requests
app.listen(8080, () => console.log('Listening at http://localhost:8080'));