// require fs, path, require('uuid/v1'), and express
const fs = require('fs');
const path = require('path');
const express = require('express');

// create a variable called router and set it to express.router()

// create a variable called dbPath and set it to the path to the db.json file.
// HINT: this is done using the path.join method, __dirname, and the realtive path from this file to the db.json file

// create a get route using the router
// the endpoint should be '/notes'
// in the callback function
	// use the fs.readFile method to read the db.json file
	// if there is an error respond with a 500 status (res.status) and the error as json (res.json)
	// otherwise, parse the json returned and send it using the res.json method

// create a post route using the router
// the endpoint should be '/notes'
// in the callback function
	// use the fs.readFile method to read the db.json file
		// if there is an error respond with a 500 status (res.status) and the error as json (res.json)
		// otherwise, parse the json returned
		// use the req.body and the uuvid1() to create a new object with the values sent in the req and a unique id
		// add the new note you just created to the notes returned from readFile and stringify it to json
		// use the fs.writeFile method to write to the db.json file using the updated, stringified notes
			// if there is an error respond with a 500 status (res.status) and the error as json (res.json)
			// otherwise, return the new note you created using res.json

// create a delete route using the router
// the endpoint should be '/notes/:id'
// in the callback function
// get the id sent in the request using from req.params
	// use the fs.readFile method to read the db.json file
		// if there is an error respond with a 500 status (res.status) and the error as json (res.json)
		// otherwise, parse the json returned
		// filter the notes returned by the readFile method to include all of the entries whose id doesn't match the id sent in the request .filter()
		// stringify the filtered notes
		// use the fs.writeFile method to write to the db.json file using the filtered, stringified notes
			// if there is an error respond with a 500 status (res.status) and the error as json (res.json)
			// otherwise, return { ok: true } using res.json
app.delete('/api/notes/:id', (req, res){
	let id = req.params.id.toString();
})
// export the router