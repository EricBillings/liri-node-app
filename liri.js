require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


const commandType = process.argv[2];

const userSelection = process.argv[3];


console.log(commandType + " " + userSelection);