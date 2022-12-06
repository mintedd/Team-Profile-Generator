const Intern = require('../lib/Intern')

const intern = new Intern("mary", 2, "mary@gmail.com", "northwestern"); //this creates a hypotethical situation

//can either use "describe --> it and expect OR test --> expect and "
test("intern should create name, id, email, and school", () => {
    // const intern = new intern("mary", 2, "mary@gmail.com"); //this creates a hypotethical situation
    //or 
    // expect(intern).toEqual({ name: "mary", id: 2, email: "mary@gmail.com" school: "northwestern"})
    expect(intern.name).toEqual("mary");
    expect(intern.id).toEqual(2);
    expect(intern.email).toEqual("mary@gmail.com");
    expect(intern.school).toEqual("northwestern")
});

test("intern getName() should return str. getID() should return #, getEmail should return str, get getRole() should return str", () => {
    expect(intern.getName()).toEqual("mary")
    expect(intern.getId()).toEqual(2)
    expect(intern.getEmail()).toEqual("mary@gmail.com")
    expect(intern.getSchool()).toEqual("northwestern")
    expect(intern.getRole()).toEqual("Intern")
});