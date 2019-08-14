
require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const fs = require("fs");


let commandType = process.argv[2];

let userSelection;


/*search for song using spotify api*/
if (commandType === "spotify-this-song") {
    userSelection = process.argv.slice(3).join(" ");
    if (process.argv.length < 4) {
        userSelection = "The Sign Ace of Base"
    } else {
        userSelection = process.argv.slice(3).join(" ");
    };
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

/*search for movie info using OMDB api*/
if (commandType === "movie-this") {
    userSelection = process.argv.slice(3).join(" ");
    if (process.argv.length < 4) {
        userSelection = "Mr. Nobody"
    } else {
        userSelection = process.argv.slice(3).join(" ");
    };

    let queryURL = "https://www.omdbapi.com/?t=" + userSelection + "&apikey=trilogy";

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

};

if (commandType === "do-what-it-says") {
    command = fs.readFile("random.txt", "utf8", function (err, data){
        if (err) {
            console.log(err);
        }
        let dataArr = data.split(",");
        commandType = dataArr[0];
        userSelection = dataArr[1].slice(1, (dataArr[1].length - 1));
        console.log(commandType);
        console.log(userSelection);
    });

};
