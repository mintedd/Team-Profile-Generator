const { default: test } = require('node:test');
const Employee = require('../lib/Employee')

const employee = new Employee("Bob", 13690, "bob@gmail.com"); //this creates a hypotethical situation

//can either use "describe --> it and expect OR test --> expect and "
test("Employee should create name, id, email", () => {
    // const employee = new Employee("Bob", 13690, "bob@gmail.com"); //this creates a hypotethical situation
    //or 
    // expect(employee).toEqual({ name: "Bob", id: 13690, email: "bob@gmail.com" })
    expect(employee.name).toEqual("Bob");
    expect(employee.id).toEqual(13690);
    expect(employee.email).toEqual("bob@gmail.com");
});

test("Employee getRole() should return their position", () => {
    expect(employee.getName()).toEqual("Bob")
    expect(employee.getId()).toEqual(13690)
    expect(employee.getEmail()).toEqual("bob@gmail.com")
    expect(employee.getRole()).toEqual("Employee")
});

