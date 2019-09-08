# Welcome To LIRI BOT

### Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

### LIRI in action

![LIRI in action](https://yunusibrahim.me/liri-node-app/assets/images/liri-bot-inaction.gif)

### Want to Try? 

1. Clone the repository
2. Run npm install, all the required packages will be install:
3. Create a .env file in the same directory as the rest of the files. In the .env file should be:
~~~~
SPOTIFY_ID="ID goes here"
SPOTIFY_SECRET="Secret goes here"
IMDB_API="Api key goes here"
BANDSINTOWN_API="Api key goes here"
~~~~

### Screenshot

#### Requests and Results handling

**Spotify**: When searching for a song will be prompt to type the song name 

![Screenshot](https://yunusib12.github.io/TriviaGame/assets/images/trivia-thumbnail.png)

### Technologies Used

* Javascript
* Node.js
* Node packages:
    * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
    * [Inquirer](https://www.npmjs.com/package/inquirer) 
    * [Moment](https://www.npmjs.com/package/moment)
    * [DotEnv](https://www.npmjs.com/package/dot-env)
    * [Figlet](https://www.npmjs.com/package/figlet)
    * [Axios](https://www.npmjs.com/package/axios)
    * [Colors](https://www.npmjs.com/package/colors)
    * fs
    * [nodemon](https://www.npmjs.com/package/nodemon)
* APIs used:
    * [Bands in Town](https://www.bandsintown.com/en)
    * [OMDB](http://www.omdbapi.com/)
    * [Spotify](https://developer.spotify.com/documentation/web-api/)
* GitHub
