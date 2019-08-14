
require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);


const commandType = process.argv[2];

let userSelection;

console.log(userSelection);


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

            console.log(JSON.stringify(musicInfo, "", 2));
        })
        .catch(function (err) {
            console.log(err);
        });
}