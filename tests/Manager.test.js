const exp = require('constants');
const Manager = require('../lib/Manager')

const manager = new Manager("sam", 30, "sam@gmail.com", 1); //this creates a hypotethical situation

//can either use "describe --> it and expect OR test --> expect and "
test("manager should create name, id, email, and office number", () => {
    // const manager = new manager("sam", 30, "sam@gmail.com"); //this creates a hypotethical situation
    //or 
    // expect(manager).toEqual({ name: "sam", id: 30, email: "sam@gmail.com", officeNumber: 1})
    expect(manager.name).toEqual("sam");
    expect(manager.id).toEqual(30);
    expect(manager.email).toEqual("sam@gmail.com");
    expect(manager.officeNumber).toEqual(1)
});

test("manager getName() should return str. getID() should return #, getEmail should return str, get getRole() should return str", () => {
    expect(manager.getName()).toEqual("sam")
    expect(manager.getId()).toBe(30)
    expect(manager.getEmail()).toEqual("sam@gmail.com")
    expect(manager.getofficeNumber()).toEqual(1)
    expect(manager.getRole()).toEqual("Manager")
});