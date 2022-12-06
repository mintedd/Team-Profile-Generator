// const { default: test } = require('node:test'); where did this come from 
const Employee = require('../lib/Employee')

const employee = new Employee("bob", 5, "bob@gmail.com"); //this creates a hypotethical situation

//can either use "describe --> it and expect OR test --> expect and "
test("Employee should create name, id, email", () => {
    // const employee = new Employee("bob", 5, "bob@gmail.com"); //this creates a hypotethical situation
    //or 
    // expect(employee).toEqual({ name: "bob", id: 5, email: "bob@gmail.com" })
    expect(employee.name).toEqual("bob");
    expect(employee.id).toEqual(5);
    expect(employee.email).toEqual("bob@gmail.com");
});

test("Employee getName() should return str. getID() should return #, getEmail should return str, get getRole() should return str", () => {
    expect(employee.getName()).toEqual("bob")
    expect(employee.getId()).toBe(5)
    expect(employee.getEmail()).toEqual("bob@gmail.com")
    expect(employee.getRole()).toEqual("Employee")
});
