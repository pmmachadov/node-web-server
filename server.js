const express = require('express');
const app = express();

// Responds to requests at the root URL
app.get("/", function (req, res) {
    res.send("Hello World!");
});

// Responds to requests at the /chocolate URL
app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});

// Add a new route for /node
app.get("/node", function (req, res) {
    res.send("Welcome to the Node.js endpoint!");
});

// Add a new route for /migracode
app.get("/migracode", function (req, res) {
    res.send("Hello from MigraCode!");
});

// Set the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
