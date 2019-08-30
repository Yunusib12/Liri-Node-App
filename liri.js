'use strict';

/* Import required files and modules
======================================================================= */

require("dotenv").config(); //

const func = require("./functions/functions");
const inquirer = require("inquirer");

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
        L I R I at your service
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
                                message: 'Type your song Title'
                            }]
                            inquirer.prompt(songTitle)
                                .then(song => {
                                    func.mySpotify(song.songTitle);
                                });
                            break;
                        case "movie infos":
                            console.log('type the movie name');
                            break;
                        case "concert infos":
                            console.log('type concert name');
                            break;
                        case "do what it says":
                            console.log('do what');
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
            
    :(- ============ Sad to see you go =================== :(-
        
                `)

        }
    });






// let songTitle = "Mama";