const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const generateHTML = require("./dist/index.html");

const generateHTML = ({ name, id, email, role, office, school}) => 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Klee+One:wght@600&family=Quicksand:wght@500&display=swap"
        rel="stylesheet">
    <title>My Team</title>
</head>

<body>
    <header style="background-color:rgb(230, 92, 76); ">
        <h1>My Team</h1>
    </header>
    <main class="p-3 m-0 border-0 bd-example">
        <div class="row" style="justify-content:center ;">
            <div class="col-sm-4 col-md-4 col-lg-4">
                <div class="card">
                    <div class="card-header">
                        <h3>
                            <ul style="list-style: none;">
                                <li id="name">Name</li>
                                <li>
                                    <i class="fa-solid fa-mug-hot fa-lg" style="align-items:left ;"></i>
                                    Role
                                </li>
                            </ul>
                        </h3>
                    </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush" style="list-style: none;">
                        <li class="list-group-item">ID: ${name}</li>
                        <li class="list-group-item">Email ${email}</li>
                        <li class="list-group-item">Office Number: ${office}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h3>
                            <ul style="list-style: none;">
                                <li>Name</li>
                                <li>
                                    <i class="fa-solid fa-mug-hot fa-lg" style="align-items:left ;"></i>
                                    Role
                                </li>
                            </ul>
                        </h3>
                    </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush" style="list-style: none;">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h3>
                            <ul style="list-style: none;">
                                <li>Name</li>
                                <li>
                                    <i class="fa-solid fa-mug-hot fa-lg" style="align-items:left ;"></i>
                                    Role
                                </li>
                            </ul>
                        </h3>
                    </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush" style="list-style: none;">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h3>
                            <ul style="list-style: none;">
                                <li>Name</li>
                                <li>
                                    <i class="fa-solid fa-mug-hot fa-lg" style="align-items:left ;"></i>
                                    Role
                                </li>
                            </ul>
                        </h3>
                    </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush" style="list-style: none;">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                    <div class="card-header">
                        <h3>
                            <ul style="list-style: none;">
                                <li>Name</li>
                                <li>
                                    <i class="fa-solid fa-mug-hot fa-lg" style="align-items:left ;"></i>
                                    Role
                                </li>
                            </ul>
                        </h3>
                    </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush" style="list-style: none;">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
    </main>
    <script src="../index.js"></script>
</body>

</html>
`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
    ])
    .then((ans) => {
    const HTML = generateHTML(ans);

    fs.writeFile('index.html', HTML, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
})