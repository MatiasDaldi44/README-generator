const generateMarkdown = function generateMarkdown(data) {
const readMeTemplate = `
# ${data.projectName}

## Description
${data.projectDescription}

## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contribution](#contribution)
*[Tests](#tests)
*[Questions](#questions)

## Installation
${data.installCommand}

## Usage
${data.userKnowledge}

## License
${data.projectLicense}

## Contribution
${data.userCont}

## Tests
${data.testCommand}

## Questions
If you have any questions about the repo, you can open an issue, or contact ${data.userGitName} directly at ${data.userEmail}.`
  return readMeTemplate;
}

module.exports = generateMarkdown;
