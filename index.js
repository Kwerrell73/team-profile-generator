// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
inquirer.prompt(
    [

        {
            type: 'input',
            message: 'what is your teams name? (Required)',
            name: 'teamName',
            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid team manager name is required.");
                }

            }
        },

        {
            type: 'input',
            message: 'what is the team managers name? (Required)',
            name: 'mgrname',
            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid team manager name is required.");
                }

            }
        },

        {
            type: 'input',
            message: 'Please enter the team managers employee ID. (Required)',
            name: 'mgrid',
            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid team manager ID is required.");
                }

            }
        },

        {
            type: 'input',
            message: 'What is the team managers email address? (Required)',
            name: 'mgremail',
            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid team manager email address is required.");
                }

            }
        },

        {
            type: 'input',
            message: 'Please enter the team managers office number. (Required)',
            name: 'mgrnumber',

            validate: (answer) => {
                if (answer) {
                    return true;
                } else {
                    console.log("A valid team manager office number is required.");
                }

            }
        },

       
        {
            type: 'list',
            name: 'emptype',
            message: 'If you would like to add a new team member, please select their role below.',
            choices: ['Engineer', 'Intern'],

            //add if else statements?
        },

        //WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
 


    ]

);

// TODO: Create a function to generate an HTML file

function writeToFile(teamName, data) {
    fs.writeFile(`./${teamName.toLowerCase().split(' ').join('')}.html`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Team Profile has been generated');
    })
}
function init() {

}

init();