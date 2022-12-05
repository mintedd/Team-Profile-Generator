const Employee = require("./Employee")

class Engineer extends Employee { //inheritance
    constructor(name, id, email, github){ //adding properties to the class
        super(name, id, email); //these are the parameters within the employee class
        this.github = github;
    }
    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer