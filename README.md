# liri-node-app




Welcome to the **liri-node-app**!

This project is a node/javascript CLI (command line interface) that allows users to enter simple commands and receive back movie and song 
information in the console.

## Technologies Used

* javascript-programming language.
* node.js-for CLI
* Spotify API-to access song information.
* OMDB API-to access movie information.
* npm Axios-to streamline access to the OMDB API
* nom FS-to read and write to files.
* npm Moment-to convert a timestamp to easily readable format.
* npm Inquirer-to prompt with a list of valid commands.

## Deployed Version LInk
<https://ericbillings.github.io/liri-node-app/>
<https://github.com/EricBillings/liri-node-app>



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
    1. **invalid command entry**
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

Message Eric_Billings (developer & maintainer) on GitHub for assistance with the application.

## About the developer

Visit Eric's portfolio page to see this and other projects:

<https://ericbillings.github.io/Bootstrap-Portfolio/>


