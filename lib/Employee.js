class Employee { //this is the template
    constructor(name, id, email){
        this.name = name; //this is theoretical to the instance that will actually be added
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name
    }

    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

module.exports = Employee