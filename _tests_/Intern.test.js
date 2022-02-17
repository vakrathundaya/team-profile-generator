
   
const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getName",() => {
        it("should return the 'name' property of the Intern object", () => {
            expect(new Intern('Jared','J','Jared@gmail.com','school').getName()).toBe('Jared');
        });
    });
    describe("getId",() => {
        it("should return the 'id' property of the Intern object", () => {
            expect(new Intern('Jared','J','Jared@gmail.com','school').getId()).toBe('J');
        });
    });
    describe("getEmail",() => {
        it("should return the 'email' property of the Intern object", () => {
            expect(new Intern('Jared','J','Jared@gmail.com','school').getEmail()).toBe('Jared@gmail.com');
        });
    });
    describe("getSchool",() => {
        it("should return the 'email' property of the Intern object", () => {
            expect(new Intern('Jared','J','Jared@gmail.com','school').getSchool()).toBe('school');
        });
    });
    describe("getRole",() => {
        it("should return 'Intern'", () => {
            expect(new Intern('Jared','J','Jared@gmail.com','school').getRole()).toBe('Intern');
        });
    });
});