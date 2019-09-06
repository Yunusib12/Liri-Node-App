'use strict';

/* Import required files and modules
======================================================================= */

require("dotenv").config(); //

const func = require("./functions/functions");
const inquirer = require("inquirer");
const colors = require("colors");

console.log("Welcome to ");
func.myFiglet();

/* QUESTIONS PROMPT
============================================================================ */

let questions = [{
    type: 'confirm',
    name: 'toHaveFun',
    message: 'Get help to find what you need?',
    default: false

}];

inquirer.prompt(questions)
    .then(answers => {
        console.log(`

        ${"L I R I at your service".green} 
        
        `);

        if (answers.toHaveFun) {
            let helpNeed = [{
                type: 'list',
                name: 'helpNeeded',
                message: 'Select what I can help you with!',
                choices: ["Song infos", "Movie infos", "Concert infos", "Do what it says"],
                filter: (val) => {
                    return val.toLowerCase();
                }
            }];
            inquirer.prompt(helpNeed)
                .then(help => {

                    switch (help.helpNeeded) {
                        case "song infos":
                            let songTitle = [{
                                type: 'input',
                                name: 'songTitle',
                                message: 'Type your song Title',
                                validate: function(val) {
                                    if (!val == "") {
                                        return true;
                                    }
                                    return val = "Type your song Title :)".red
                                }
                            }]
                            inquirer.prompt(songTitle)
                                .then(song => {
                                    func.mySpotify(song.songTitle);
                                });
                            break;
                        case "movie infos":
                            let movieTitle = [{
                                type: 'input',
                                name: 'movieTitle',
                                message: 'Type your Movie Title',
                                validate: function(val) {
                                    if (!val == "") {
                                        return true;
                                    }
                                    return val = "Type your movie Title :)".red
                                }
                            }]
                            inquirer.prompt(movieTitle)
                                .then(movie => {

                                    func.myMovie(movie.movieTitle);
                                });
                            break;
                        case "concert infos":
                            let artistName = [{
                                type: 'input',
                                name: 'artistName',
                                message: 'Type your Band / Artist Name',
                                validate: function(val) {
                                    if (!val == "") {
                                        return true;
                                    }
                                    return val = "Type your Band / Artist Name :)".red
                                }
                            }]
                            inquirer.prompt(artistName)
                                .then(band => {
                                    func.myBdITown(band.artistName);
                                });

                            break;
                        case "do what it says":
                            console.log('do what');
                            func.myDoWhat();
                            break;
                        default:
                            console.log(`Invalid Option. Please type any of the following options: 
                            Song infos,
                            Movie infos, 
                            Concert infos, 
                            Do what it says`)
                            break;
                    }

                });
        } else {

            console.log(`
            
    ${":(- ============ Sad to see you go =================== :(-".red}
        
                `)

        }
    });