const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./src/style")

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

let completedTeam = [];


function startTeamProfile() {
    inquirer.prompt([
        {
            message: "Please type your team name:",
            name: "teamname"
        }
    ])
        .then(function(data){
            const teamName = data.teamname
            completedTeam.push(teamName)
            addManager();
        })

    
}

function addManager() {
    inquirer.prompt([
        {
            message: "Please type the team manager's name:",
            name: "name"
        },
        {
            message: "Please provide the team manager's email address:",
            name: "email"
        },

        {
            message: "Please provide the team manager's office number:",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            console.log(officeNumber);
            const teamMember = new Manager(name, id, email, officeNumber)
                    
            completedTeam.push(teamMember)
            newTeamMbr();
        });

}

function newTeamMbr() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add additional team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addNewMemberData"
        }
    ])

        .then(function (data) {

            switch (data.addNewMemberData) {
                case "Yes, add an engineer":
                    addNewEngineer();
                    break;

                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    compileTeam();
                    break;
            }
        });
}

function addNewEngineer() {
    inquirer.prompt([
        {
            message: "Please provide the engineer's name:",
            name: "name"
        },
        {
            message: "Please provide the engineer's email address:",
            name: "email"
        },
        {
            message: "Please provide the engineer's Github profile:",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = completedTeam.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
         

            completedTeam.push(teamMember)
            newTeamMbr()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "Please provide the intern's name:",
            name: "name"
        },
        {
            message: "Please provide the intern's email address:",
            name: "email"
        },
        {
            message: "Please provide the intern's university name:",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = completedTeam.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            completedTeam.push(teamMember)
            newTeamMbr()
        });

};

function compileTeam() {
    console.log("Your Team Profile has been created!!!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${completedTeam[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="card-header">
        <h1>${completedTeam[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < completedTeam.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${completedTeam[i].name}</h2>
                <h2>${completedTeam[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${completedTeam[i].id}</p>
                <p>Email: <a href="mailto:${completedTeam[i].email}">${completedTeam[i].email}</a>></p>
        `
        console.log(completedTeam[i].officeNumber);
        if (completedTeam[i].officeNumber) {
            object += `
            <p>Office: ${completedTeam[i].officeNumber}</p>
            `
        }
        if (completedTeam[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${completedTeam[i].github}">${completedTeam[i].github}</a></p>
            `
        }
        if (completedTeam[i].school) {
            object += `
            <p>School: ${completedTeam[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./generatedHtml/${completedTeam[0]}.html`, htmlArray.join(""), function (err) {
        
    })
}

startTeamProfile()