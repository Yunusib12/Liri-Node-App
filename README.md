# Welcome To LIRI BOT

### Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

### LIRI in action

<img src="/assets/images/liri-bot-inaction.gif?raw=true">

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

### LIRI Available functions

* Search for Song information
* Search for Concert information
* Search for Movie information
* Do what it says

#### Functionality of each choice

+ Song Info 'song name'

This will show the following about the song in your terminal/bash window:

- Artist(s)
- Song Name
- Album of the Song
- Song Preview Link

If no song is provided then the song **"The Sign"** will be searched instead

+ Concert Info 'concert or band name'

This will show the following information about each event to your terminal/bash window:
- Name of the Venue
- Location of the Venue
- Date of the Event

+ Movie Info 'movie name'

This will output the following information to your terminal/bash window:

- Title of the Movie
- Year the Movie was Released
- The IMDB Rating
- Country the Movie was made in
- Language the Movie is in
- Plot of the Movie
- Actors in the Movie
- The Rotten Tomatoes Rating

If no movie is provided then the movie **"Mr. Nobody."** will be searched instead

+ do what it says

The program will take the text inside of random.txt and use it to call the first command with the second part as it's parameter
Currently in random.txt, the following text is there:
spotify-this-song,"I Want it That Way"

This would call the spotify-this-song function and pass in "I Want it That Way" as the song.

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
