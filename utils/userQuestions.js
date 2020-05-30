const questions = [
    {
        type: "input",
        name: "userGitName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address?"
    }, 
    {
        type: "input",
        name: "projectURL",
        message: "What is the URL to your project?",
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?",
    },
    {
        type: "??????",
        name: "projectDescription",
        message: "Please write a short description of your project App",
    },
    {
        type: "list",
        name: "projectLicense",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD", "None"],
    },
    {
        type: "input",
        name: "installCommand",
        message: "What command should be run to install dependencies?",
        default: "npm i",
    },
    {
        type: "input",
        name: "testCommand",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: "input",
        name: "userKnowledge",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "userCont",
        message: "What does the user need to know about contributing to the repo?",
    }
];

module.exports = questions;