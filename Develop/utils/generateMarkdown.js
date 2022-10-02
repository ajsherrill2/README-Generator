// Returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return ``;
  } else {
    return `- [License](#license)`;
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ``;
  } else {
    return `## License
    
This project is licensed under the ${license} license.
`;
  }
}

// Generates markdown for README
const generateMarkdown = ({
  username,
  contact,
  title,
  description,
  license,
  installation,
  tests,
  usage,
  contributing,
}) => {
  return `# ${title}
${renderLicenseBadge(license)}

## Description

${description}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${installation}
\`\`\`

## Usage

${usage}
  
## Contributing

${contributing}
  
${renderLicenseSection(license)}
  
## Tests

To run tests, run the following command:

\`\`\`
${tests}
\`\`\`


## Questions

If you have any questions about the repo open an issue or contact me directly at ${contact}. You can find more of my work at [${username}](https://github.com/${username}/).
`;
};

module.exports = {
  generateMarkdown,
};
