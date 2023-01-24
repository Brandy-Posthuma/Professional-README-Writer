// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL') {
    return '![License: GPL v3] (https://img.shields.io/badges/License-GPLv3-blue.svg)'
  } else if (license === 'BDS') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, title) {
  if (license == "MIT") {
    return `
  ${title} is distributed under the MIT license.
  More information at: https://opensource.org/licenses/MIT`;
  }
  else if (license == "Apache") {
    return `
    ${title} is distributed under the Apache license.
    More information at: https://opensource.org/licenses/Apache-2.0`;
  }
  else if (license == "GPL") {
    return `
    ${title} is distributed under the GPL license.
    More information at: https://www.gnu.org/licenses/gpl.html`;
  }
  else if (license == "BDS") {
    return `
    ${title} is distributed under the BDS license.
    More information at: https://opensource.org/licenses/BDS`;
  }
  else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, title) {
  if (license !== "No License") {
    let licenseBadge = renderLicenseBadge(license);
    let licenseLink = renderLicenseLink(license, title);
    return `## License
  ${licenseBadge}
  ${licenseLink}
  `;
  }
  else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license, data.title);
  return `# ${data.title}

## Description
${data.description}
${data.projectImage}
## Table of Contents
- <a href="#description">Description</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#contributors">Contributors</a>
- <a href="#license">License</a>
- <a href="#questions">Questions</a>
- <a href="tests">Tests</a>

## Installation
${data.installation}

## Usage
${data.usage}
![Project Image](utils/${data.projectImage})

${data.projectVideo}

## Contributors 
${data.contributors}

## Tests
${data.tests}

## Questions
Visit https://github.com/${data.github}/ or contact ${data.email} with questions.

## Link
${data.link}

${licenseSection}
`;
}

module.exports = generateMarkdown;
