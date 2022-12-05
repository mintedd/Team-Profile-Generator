const Employee = require("./Employee")


class Intern extends Employee { //inheritance
    constructor(name, id, email, school){ //adding properties to the class
        super(name, id, email); //these are the parameters within the employee class
        this.school = school;
    }
    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern