const Intern = require('../lib/Intern')

const engineer = new Engineer("mary", 2, "jon@gmail.com", "northwestern"); //this creates a hypotethical situation

//can either use "describe --> it and expect OR test --> expect and "
test("engineer should create name, id, email, and school", () => {
    // const engineer = new engineer("mary", 2, "jon@gmail.com"); //this creates a hypotethical situation
    //or 
    // expect(engineer).toEqual({ name: "jon", id: 2, email: "jon@gmail.com" school: "northwestern"})
    expect(engineer.name).toEqual("mary");
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual("jon@gmail.com");
    expect(engineer.school).toEqual("northwestern")
});

test("engineer getRole() should return their position", () => {
    expect(engineer.getName()).toEqual("mary")
    expect(engineer.getId()).toEqual(2)
    expect(engineer.getEmail()).toEqual("jon@gmail.com")
    expect(engineer.getSchool()).toEqual("northwestern")
    expect(engineer.getRole()).toEqual("Intern")
});