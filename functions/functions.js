const figlet = require("figlet");
const Spotify = require("node-spotify-api");
const keys = require("../keys.js");
const axios = require("axios");
const colors = require('colors');

let spotify = new Spotify(keys.spotify);

// FUnction that display the L I R I Sign
let myFiglet = function() {

    figlet.text('L I R I', {
        font: 'Doh',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}

// Function that search for a song information on Spotify API 
let showSongInfo = function(songTitle) {

    if (songTitle === undefined) {
        songTitle = "The Sign"; //default Song
    }
    spotify.search({
            type: "track",
            query: songTitle,
            limit: 5
        },
        function(err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;

            songs.forEach(elem => {

                console.log(`
Artist: ${elem.artists[0].name}, 
Song: ${elem.name}, 
Album: ${elem.album.name}, 
Spotify Link: ${elem.external_urls.spotify}
====================================================================`);
            });
        }
    );
};

// Function that get movie informations form IMDB

let getMovieInfo = function(movieTitle) {

    if (movieTitle === undefined) {
        movieTitle = "Mr. Nobody";
    }

    let imdbApi = keys.imdb.api;
    let queryUrl = `http://www.omdbapi.com/?t="${movieTitle}"&y=&plot=short&apikey=${imdbApi}`;

    axios.get(queryUrl)
        .then(function(response) {

            let datas = response.data;

            console.log(`
${"Title:".cyan} ${datas.Title}, 
${"Release Year:".cyan} ${datas.Released}, 
${"IMDB Rating:".cyan} ${datas.Ratings[0].Value}, 
${"Rotten Tomatoes Rating:".cyan} ${datas.Ratings[1].Value},
${"Country:".cyan} ${datas.Country},
${"Language:".cyan} ${datas.Language},
${"Actors:".cyan} ${datas.Actors},
${"Plot:".cyan} ${datas.Plot}

====================================================================`);


        })
        .catch(function(err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                console.log(err.request);
            } else {
                console.log("Error", err.message);
            }
            console.log(err.config);
        });



}

module.exports = {
    myFiglet: myFiglet,
    mySpotify: showSongInfo,
    myMovie: getMovieInfo
}