
require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const omdb = keys.omdb.apikey;
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");
const inquirer = require("inquirer");

const choices = []

let commandType = process.argv[2];

let userSelection;


switch (commandType) {
    case "movie-this":
        if (process.argv.length < 4) {
            logFile();
            userSelection = "Mr. Nobody"
        } else {
            userSelection = process.argv.slice(3).join(" ");
            logFile();
        };
        checkMovie();
        break;
    case "spotify-this-song":
        if (process.argv.length < 4) {
            logFile();
            userSelection = "The Sign Ace of Base"
        } else {
            userSelection = process.argv.slice(3).join(" ");
            logFile();

        };

        checkSpotify();
        break;

    case "do-what-it-says":
        readFile();
        break;

    default:
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'commands',
                    message: 'Please enter a valid command, or choose from the options below:',
                    choices: [
                        'Search for movie information',
                        'Search for song information',
                        `Run a command from the file`
                    ]
                }
            ])
            .then(answers => {
                console.log(`
                For movie info, type: movie-this  movie name
                For song info, type: spotify-this-song song name
                To run the stored command, type: do-what-it-says
                 `);
            });

}


function checkMovie() {
    let queryURL = `https://www.omdbapi.com/?t=${userSelection}&apikey=${omdb}`;

    axios({
        method: 'get',
        url: queryURL,
    })
        .then(function (response) {
            let movieInfo = {
                title: response.data.Title,
                year: response.data.Year,
                IMDBating: response.data.imdbRating,
                RottenTomatoRating: response.data.Ratings[1].Value,
                Country: response.data.Country,
                Language: response.data.Language,
                Plot: response.data.Plot,
                Actors: response.data.Actors
            }
            console.log(movieInfo);
        });

}


function checkSpotify() {

    spotify
        .search({ type: 'track', query: userSelection, limit: 1 })
        .then(function (response) {
            let musicInfo = {
                artist: response.tracks.items[0].album.artists[0].name,
                song: response.tracks.items[0].name,
                link: response.tracks.items[0].external_urls.spotify,
                album: response.tracks.items[0].album.name
            };
            console.log(musicInfo);

        })
        .catch(function (err) {
            console.log(err);
        });
}

function readFile() {
    command = fs.readFile("./random.txt", "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        let dataArr = data.split(",");
        commandType = dataArr[0];
        userSelection = dataArr[1].slice(1, (dataArr[1].length - 1));
        logFile();
        console.log(commandType);
        console.log(userSelection);

        switch (commandType) {
            case "movie-this":
                checkMovie();
                break;
            case "spotify-this-song":
                checkSpotify();
                break;
            default:
                console.log("Command Unknown")
        }


    });
}

function logFile() {
    let time = Date.now();
    time = moment(time).format('MMMM Do YYYY, h:mm:ss a');

    fs.appendFile("./log.txt", "\n" + time + " " + commandType + " " + userSelection, "utf8", function (err) {
        if (err) throw err;
        console.log("Data is appended to file successfully.")


    })
};