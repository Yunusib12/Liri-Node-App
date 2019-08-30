const figlet = require("figlet");
const Spotify = require("node-spotify-api");
const keys = require("../keys.js");
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
function showSongInfo(songTitle) {

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

module.exports = {
    myFiglet: myFiglet,
    mySpotify: showSongInfo
}