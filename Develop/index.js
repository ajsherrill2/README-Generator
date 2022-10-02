// Packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const { generateMarkdown } = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "contact",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE", "GPL", "BSD", "none"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// Function to write README file
const writeToFile = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    await writeFile("README.md", generateMarkdown(answers));
    console.log("Generating README...");
  } catch (e) {
    console.log(e);
  }
};
writeToFile();