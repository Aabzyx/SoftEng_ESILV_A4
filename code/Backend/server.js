'use strict'
// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");
const cors = require('cors')
// Import DB Connection
const db = require("./config/db");
// Import API route
const routeElection = require('./app/routes/election.routes'); //importing route
const routeUser= require('./app/routes/user.routes'); //importing route
const routeVote = require('./app/routes/vote.routes'); //importing route

// create express app
const  app = express();

// define port to run express app
const  port = process.env.PORT || 5000;

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Add endpoint
app.get("/", (req, res) => {
  res.json({ message: "Server lives!!!" });
});
// connect routes
routeElection(app);
routeUser(app);
routeVote(app);

// Listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

