class Employee { //this is the template
    constructor(name, id, email){
        this.name = name; //this is theoretical to the instance that will actually be added
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name
        console.log(this.name)
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

let myEmployee = new Employee ("bob", 1, "bob@gmail.com") //instance
// document.getElementById("name").innerHTML = 
myEmployee.getName("bob");

module.exports = Employee