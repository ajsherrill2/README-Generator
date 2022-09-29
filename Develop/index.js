// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const {generateMarkdown} = require('./utils/generateMarkdown');

const runCode = async() => {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'contact',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'title',
                message: "What is your project's name?",
            },
            {
                type: 'input',
                name: 'description',
                message: "Please write a short description of your project",
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What command should be run to install dependencies?',
                default: 'npm i',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be run to run tests?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about using the repo?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What does the user need to know about contributing to the repo?',
            },
        ])
        await writeFile('README.md', generateMarkdown(answers));
        console.log('Readme created');
        // console.log(generateMarkdown(answers));
    } catch (e) {
        console.log(e);
    }
}
runCode();