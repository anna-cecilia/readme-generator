
const fs = require("fs");
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?"
    },
    {
      type: "input",
      name: "description",
      message: "what is the project description?"
    },
    {
      type: "input",
      name: "install",
      message: "How do you install your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "How will your project be used?"
    },
    {
        type: "input",
        name: "license",
        message: "What is the project license?"
    },
    {
        type: "input",
        name: "contribute",
        message: "List any contributions."
    },
    {
        type: "input",
        name: "tests",
        message: "List any tests."
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    }
  ])
  .then(data => {
    const projectName = data.title;
    const description = data.description;
    const install = data.install;
    const usage = data.usage;
    const license = data.license;
    const contribute = data.contribute;
    const tests = data.tests;
    const github = data.github;

    let pageContent = `# ${projectName} \n ## Description \n ${description} 
    \n ## Information \n This project can be installed by ${install} \n This app will be used to ${usage}
    \n ${license} \n ### Contributors \n ${contribute} \n ### Tests \n ${tests} 
    \n ## GitHub Username \n ${github}`
    fs.writeFile("readme.md", pageContent, err => {
      if (err) {
        throw err;
      }
      console.log("success!");
    });
  });
