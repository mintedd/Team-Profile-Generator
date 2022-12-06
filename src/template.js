
const generateTeam = teamLoad => {


    const generateManager = (manager) => {
        return
        `
    <div class="col-sm-4 col-md-4 col-lg-4">
    <div class="card">
        <div class="card-header">
            <h3>
                <ul style="list-style: none;">
                    <li id="name">${manager.getName()}</li>
                    <li>
                        <i class="fa-solid fa-mug-hot fa-lg" style="align-items:left ;"></i>
                        ${manager.role}
                    </li>
                </ul>
            </h3>
        </div>
      <div class="card-body">
        <ul class="list-group list-group-flush" style="list-style: none;">
            <li class="list-group-item">ID: ${manager.getID()}</li>
            <li class="list-group-item">Email: ${manager.getEmail()} </li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  </div>
    `
    };

    const generateEngineer = (engineer) => {
        return
        `
    <div class="col-sm-4 col-md-4 col-lg-4">
    <div class="card">
        <div class="card-header">
            <h3>
                <ul style="list-style: none;">
                    <li id="name">${engineer.getName()}</li>
                    <li>
                        <i class="fa-solid fa-mug-hot fa-lg" style="align-items:left ;"></i>
                        ${engineer.getRole()}
                    </li>
                </ul>
            </h3>
        </div>
      <div class="card-body">
        <ul class="list-group list-group-flush" style="list-style: none;">
            <li class="list-group-item">ID: ${engineer.getID()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()} </li>
            <li class="list-group-item">Office Number: ${engineer.getGithub()}</li>
        </ul>
      </div>
    </div>
  </div>
    `
    };
    const generateIntern = (intern) => {
        return
        `
    <div class="col-sm-4 col-md-4 col-lg-4">
    <div class="card">
        <div class="card-header">
            <h3>
                <ul style="list-style: none;">
                    <li id="name">${intern.getName()}</li>
                    <li>
                        <i class="fa-solid fa-mug-hot fa-lg" style="align-items:left ;"></i>
                        ${intern.getRole()}
                    </li>
                </ul>
            </h3>
        </div>
      <div class="card-body">
        <ul class="list-group list-group-flush" style="list-style: none;">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()} </li>
            <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  </div>
    `
    }
    const HTML = [];
    HTML.push(teamLoad
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager)))
    HTML.push(teamLoad
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join(""))
    HTML.push(teamLoad
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join(""))
    return HTML.join("")
};

module.exports = teamLoad => {
    return
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
                ${generateTeam(teamLoad)}
              </div>
        </div>
    </main> <!--main section will be dynamically created and added-->
</body>

</html>
    `; 
};