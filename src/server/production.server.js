const path = require('path');
const express = require('express');

// Initialize Express application
const productionServer = express();

// Serve gzip compressed Javascript when requests are made for Javascript files
productionServer.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

// Serve gzip compressed CSS when requests are made for CSS files
productionServer.get('*.css', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
});

// Serve static assets
productionServer.use(express.static(path.join(__dirname, '..', '..', 'build')));

// Serve index.html as default route
productionServer.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

module.exports = productionServer;