const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./utils/userQuestions");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt(questions).then((response) => {fs.writeFile("README.md", generateMarkdown(response), function(err) {
    if (err) {
        return console.log(err);
    }
})});