
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

    let pageContent = `<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>${projectName}</title>
      </head>
      <body>
        <div class="jumbotron">
            <h1 class="display-4">Hi! My project is ${projectName}</h1>
            <p class="lead"> ${description}</p>
            <hr class="my-4">
            <h2>Learn More: </h2>
            <p class="lead"> ${install}</p>
            <p class="lead"> ${license}</p>
            <p class="lead"> ${contribute}</p>
            <p class="lead"> ${tests}</p>
            <a class="btn btn-primary btn-lg" href="${github}" role="button">Visit my GitHub</a>
          </div>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      </body>
    </html>`;
    fs.writeFile("readme.md", pageContent, err => {
      if (err) {
        throw err;
      }
      console.log("success!");
    });
  });