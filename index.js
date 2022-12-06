const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// const { dirname } = require("path"); //automatically created itself
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const template = require("./src/template");

// const { dir } = require("console"); //automatically created itself


const dirpath = path.resolve(__dirname, "dist"); //did this part with my tutor still trying to fully understand 
const distpath = path.join(dirpath, "index.html");

let team = [];
//you are going to push the new members into this array?
function init() {

    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is your ID?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter your Email?',
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: 'Enter your office number?',
            },
        ])
            .then((ans) => {
                const manager = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOffice)
                team.push(manager)
                createTeam();
            })

    };
    function createTeam() {
        console.log('Please answer the following prompts to create your team');
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamChoice',
                message: "What team member would you like to add",
                choices: ["Engineer", "Intern", "No other members"]
            },
        ])
            .then((userChoice) => {
                switch (userChoice.teamChoice) {
                    case "Engineer":
                        createEngineer();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    default:
                        buildTeam()
                    //  if i wanted to make this without the path would the writefile go here? 
                    //  fs.writeFile('index.html', template(ans), (err) => 
                    // err ? console.log(err) : console.log('Successfully created index.html!')
                    // )
                }
            })
    };

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is your ID?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter your Email?',
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Enter your Github.',
            },
        ])
            .then((ans) => {
                const engineer = new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerOffice)
                team.push(engineer)
                createTeam();
            })
    };
    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is your ID?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter your Email?',
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Enter your school.',
            },
        ])
            .then((ans) => {
                const intern = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internOffice)
                team.push(intern)
                createTeam();
            })
    };

    function buildTeam() {
        if (!fs.existsSync(dirpath)) { ////did this part with my tutor still trying to fully understand 
            fs.mkdirSync(dirpath)
        }
        fs.writeFileSync(distpath, template(team), "utf-8")
    }

    createManager()
};

init();
//not sure how to prompt the specfic questions 