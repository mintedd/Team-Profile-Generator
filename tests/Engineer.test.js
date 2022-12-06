const Engineer = require('../lib/Engineer')


const engineer = new Engineer("jon", 5, "jon@gmail.com", "jonny"); //this creates a hypotethical situation

//can either use "describe --> it and expect OR test --> expect and "
test("engineer should create name, id, email, and github", () => {
    // const engineer = new engineer("jon", 5, "jon@gmail.com"); //this creates a hypotethical situation
    //or 
    // expect(engineer).toEqual({ name: "jon", id: 5, email: "jon@gmail.com" github: "jonny"})
    expect(engineer.name).toEqual("jon");
    expect(engineer.id).toEqual(5);
    expect(engineer.email).toEqual("jon@gmail.com");
    expect(engineer.github).toEqual("jonny")
});

test("engineer getRole() should return their position", () => {
    expect(engineer.getName()).toEqual("jon")
    expect(engineer.getId()).toBe(5)
    expect(engineer.getEmail()).toEqual("jon@gmail.com")
    expect(engineer.getGithub()).toEqual("jonny")
    expect(engineer.getRole()).toEqual("Engineer")
});
