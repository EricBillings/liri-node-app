# liri-node-app




Welcome to the **liri-node-app**!

This project is a node/javascript CLI (command line interface) that allows users to enter simple commands and receive back movie and song information in the console.

## To get started with the program: 

1. Clone the repository to your local machine.

1. Run npm install on the command line to install local dependencies. 
    <img src="./images/nodeinstall.png"
     alt="Node Install"
     />

1. Obtain Spotify and OMDB keys:
   1. For Spotify, visit <https://developer.spotify.com/documentation/web-api/quick-start/>
   
   1. For OMDB, visit <http://www.omdbapi.com/>

1.  Next, create a file named `.env` in your local repository, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
omdb=your-omdb-key

```

## Using the app

1.  Navigate to your repository using the command line.

1.  Type one of the following commands (without quotes) to search for movie or song information.
    1. **spotify-this-song "song name"** to obtain information about a specific song.
    <img src="./images/spotifythis.png"
     alt="Spotify Song example"
     />

    1. **movie-this "movie-name"** to obtain information about a specific movie.
        <img src="./images/moviethis.png"
     alt="Movie example"
     />
    1. **do-what-it-is** to run a stored search command.
        <img src="./images/dowhatitsays.png"
     alt="Stored Command example"
     />
    1. ##invalid command entry
    If the user enters an invalid command, he/she will be prompted with a list of valid commands.
        <img src="./images/badcommand.png"
     alt="Bad Command example"
     />
         <img src="./images/badcommandoptions.png"
     alt="Bad Command Two example"
     />

After each command entry, the app logs the command to the log.txt file with a timestamp.
        <img src="./images/logfile.png"
     alt="Log example"
     />




## Help with the app

Message Eric_Billings on GitHub for assistance with the application.


