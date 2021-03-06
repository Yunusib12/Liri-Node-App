const figlet = require("figlet");
const Spotify = require("node-spotify-api");
const keys = require("../keys.js");
const axios = require("axios");
const colors = require("colors");
const moment = require("moment");
const fs = require("fs");

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

            if (songs.length > 0) {

                songs.forEach(elem => {

                    console.log(`
 ${"Artist:".cyan} ${elem.artists[0].name}, 
 ${"Song:".cyan} ${elem.name}, 
 ${"Album:".cyan} ${elem.album.name}, 
 ${"Spotify Link:".cyan} ${elem.external_urls.spotify}
 ====================================================================`);

                    let dataToLog = [
                        "Artist: " + elem.artists[0].name,
                        "Song: " + elem.name,
                        "Album: " + elem.album.name,
                        "Spotify Link: " + elem.external_urls.spotify
                    ].join("\n\n");

                    // log datas
                    logIt(dataToLog);

                });
            } else {

                //Display this message 
                console.log(`
                
                ${"Sorry we couldn't find what you looking for try again! ".red} 
                
                ${"Meantime here is some information you might be interrested in :)".green}
                
                `);

                //if no result show information on this song
                showSongInfo("The Sign Ace of Base");
            }


        }
    );
};

// Function that get movie informations form IMDB

let getMovieInfo = function(movieTitle) {

    if (movieTitle === undefined) {
        movieTitle = "Mr. Nobody";
    }

    let imdbApi = keys.imdb.api;
    let queryUrl = `http://www.omdbapi.com/?t=${movieTitle}&y=&plot=short&apikey=${imdbApi}`;

    axios.get(queryUrl)
        .then(function(response) {

            let datas = response.data;

            if (!datas.Response) {
                console.log(`
                
                ${"Sorry we couldn't find what you looking for try again! ".red} 
                
                ${"Meantime here is some information you might be interrested in :)".green}
                
                `);

                // if nothing 
                getMovieInfo("Mr. Nobody");
            } else {

                console.log(`
${"Title:".cyan} ${datas.Title}, 
${"Release Year:".cyan} ${datas.Released},
${"Country:".cyan} ${datas.Country},
${"Language:".cyan} ${datas.Language},
${"Actors:".cyan} ${datas.Actors},
${"Plot:".cyan} ${datas.Plot}`);

                datas.Ratings.forEach(function(elem) {
                    console.log(`${elem.Source.cyan} :  ${elem.Value}`);
                });

                console.log(`
====================================================================`)

                let moviedatasLog = [
                    "Title: " + datas.Title,
                    "Release Year: " + datas.Released,
                    "Country: " + datas.Country,
                    "Language: " + datas.Language,
                    "Actors: " + datas.Actors,
                    "Plot: " + datas.Plot
                ].join("\n\n");

                // log datas
                logIt(moviedatasLog);
            }
        })
        .catch(function(err) {
            if (err.response) {
                console.log("1", err.response.data);
                console.log("2", err.response.status);
                console.log("3", err.response.headers);
            } else if ("4", err.request) {
                console.log("5", err.request);
            } else {
                console.log("Error", err.message);
            }
            console.log("6", err.config);
        });
}

// Function Get BAnd in Town information

let getBdITown = function(bandName) {

    let bdITownApi = keys.bdITown.api;
    let queryUrl = `https://rest.bandsintown.com/artists/${bandName}/events?app_id=${bdITownApi}`;
    let errMsg = false;

    axios.get(queryUrl)
        .then(function(response) {

            let datas = response.data;
            if (datas.length > 0) {

                datas.forEach(elem => {
                    console.log(`
 ${"Line up:".cyan} ${elem.lineup},                   
 ${"Name of the Venue:".cyan} ${elem.venue.name}, 
 ${"Venue Location:".cyan} ${elem.venue.city}, ${elem.venue.country}, 
 ${"Date Event:".cyan} ${moment(elem.datetime).format("MM-DD-YYYY, h:mm:ss a")},
 ${"Buy Ticket:".cyan} ${elem.offers[0].url}                    
 ====================================================================`);


                    let concertDatasLog = [
                        "Line up: " + elem.lineup,
                        "Name of the Venue: " + elem.venue.name,
                        "Venue Location: " + elem.venue.city + " " + elem.venue.country,
                        "Date Event: " + moment(elem.datetime).format("MM-DD-YYYY, h:mm:ss a"),
                        "Buy Ticket: " + elem.offers[0].url
                    ].join("\n\n");

                    // log datas
                    logIt(concertDatasLog);
                });

            } else {

                console.log(`
                
                ${"Sorry we couldn't find what you looking for try again! ".red} 
                
                ${"Meantime here is some information you might be interrested in :)".green}
                
                `);

                //If no result 
                getBdITown("Jarule");
            }
        })
        .catch(function(err) {

            let errR = err.response;

            if (errR) {
                if (errR.status == 404 || errR.status == 400) {

                    errMsg = true;

                }
                // console.log("1", errR.data);
                // console.log("2", errR.status);
                // console.log("3", errR.headers);
            }
            // else if (err.request) {
            //     //console.log("4", err.request);
            // } else {
            //     //console.log("Error", err.message);
            // }
            // console.log("555", err.config);

            if (errMsg == true || errMsg == false) {

                console.log(`
    
                ${"Sorry we couldn't find what you looking for try again! ".red} 
    
                ${"Meantime here is some information you might be interrested in :)".green}
    
                `);

                //If no result 
                getBdITown("Jarule");
            }

        });

};

// Function Do What it say

let doWhatItSays = function() {

    fs.readFile("./random.txt", "utf-8", function(error, data) {

        if (error) {
            return console.log(error);
        }
        let dataArr = data.split(",");
        let action = dataArr[0];
        let searchElem = dataArr[1].slice(1, -1);
        //console.log(action, searchElem);
        switch (action) {
            case "spotify-this-song":
                showSongInfo(searchElem);
                break;
            case "movie-this":
                getMovieInfo(searchElem);
                break;
            case "concert-this":
                getBdITown(searchElem);
                break;
            default:
                console.log("Nothing to do!");
                break;
        }

    });
};

// Log result into log.txt file 
const divider = "\n------------------------------------------------------------\n\n";

const logIt = (data) => {
    //console.log("Starting log file write ...");

    // return a new promise
    return new Promise((resolve, reject) => {
        fs.appendFile("log.txt", data + divider, (err) => {
            //console.log("Log file write completed.");

            if (err) {
                // invoke reject to complete the promise w/ failure (.catch)
                reject(err);
            } else {
                // invoke resolve to complete the promise successfully (.then)
                // resolve w/ a json object indicating how many bytes were written
                resolve({ bytesWritten: data.length });
            }
        });
    });
};


// FUnction writing inside a file
let writeFile = function(dWrite, title) {

    let textWrite;

    switch (dWrite) {
        case "song":
            textWrite = `spotify-this-song,"${title}"`;
            break;
        case "concert":
            textWrite = `concert-this,"${title}"`;
            break;
        case "movie":
            textWrite = `movie-this,"${title}"`;
            break;
        default:
            console.log("Noting todo");
            break;
    }

    fs.writeFile("random.txt", textWrite, function(err) {

        if (err) {
            return console.log(err);
        }

    });

}
module.exports = {
    myFiglet: myFiglet,
    mySpotify: showSongInfo,
    myMovie: getMovieInfo,
    myBdITown: getBdITown,
    myDoWhat: doWhatItSays,
    myLog: logIt,
    myWriteF: writeFile
}