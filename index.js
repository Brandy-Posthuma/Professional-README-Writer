const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js");
const README_FILENAME = 'README.md'

// User questions //
let questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the path of installation of the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license of your project',
        choices: [
            'MIT',
            'Apache',
            'GPL',
            'BSD',
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed on the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are any tests present in the project?',
    },
    {
        type: 'input',
        name: 'issues',
        message: 'Are any issues present in the project?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

//Create a function to write the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! " + fileName + " file!");
    });
};

// TODO: Create a fuction to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        const markdown = generateMarkdown(answers);
        writeToFile(README_FILENAME, markdown);
    });
};

//The function to call for initilization of the app
init();