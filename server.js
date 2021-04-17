// require express and your two routes files
const express = require('express');
const path = require('path');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3306

// Set up body parsing middleware for json and urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 // serve up the public directory using the static middleware
// using app.use() for both route files pass in two arguments:
	// the path ('/api' for api routes and '/' for html routes)
	// the routes that you required
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use(express.static('public'));
// Start the server on the port
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
