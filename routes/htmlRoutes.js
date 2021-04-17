// require path and express
const express = require('express');
const path = require('path');

// create a variable called router and set it to express.router() 

// create a get route on router
// path should be '/notes'
// send the notes.html file from the public folder
// HINT: use path.join and __dirname
app.get('/notes', (req, res) => { 
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// create a get route on router for all other routes
// path should be '*' (stands for all or any)
// send the index.html file from the public folder
// HINT: use path.join and __dirname

// export the router