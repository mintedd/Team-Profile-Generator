const Employee = require("./Employee")


class Manager extends Employee { //inheritance
    constructor(name, id, email, officeNumber){ //adding properties to the class
        super(name, id, email); //these are the parameters within the employee class
        this.officeNumber = officeNumber;
    }
    getofficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager