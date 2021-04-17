// require express and your two routes files
const express = require('express');
const path = require('path');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3306

// Set up body parsing middleware for json and urlencoded
// http://expressjs.com/en/api.html#express
// check out server.js in starwars app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 // serve up the public directory using the static middleware
 // https://expressjs.com/en/starter/static-files.html

// using app.use() for both route files pass in two arguments:
	// the path ('/api' for api routes and '/' for html routes)
	// the routes that you required
// ***Interestingly, the order is very important here as the html routes depend on the api routes to function so apiRoutes must come first.
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use(express.static('public'));
// Start the server on the port
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
