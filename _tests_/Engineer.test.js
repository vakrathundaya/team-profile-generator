const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getName",() => {
        it("should return the 'name' property of the Engineer object", () => {
            expect(new Engineer('Jared','J','Jared@gmail.com','Jaredgit').getName()).toBe('Jared');
        });
    });
    describe("getId",() => {
        it("should return the 'id' property of the Engineer object", () => {
            expect(new Engineer('Jared','J','Jared@gmail.com','Jaredgit').getId()).toBe('J');
        });
    });
    describe("getEmail",() => {
        it("should return the 'email' property of the Engineer object", () => {
            expect(new Engineer('Jared','J','Jared@gmail.com','Jaredgit').getEmail()).toBe('Jared@gmail.com');
        });
    });
    describe("getGithub",() => {
        it("should return the 'email' property of the Engineer object", () => {
            expect(new Engineer('Jared','J','Jared@gmail.com','Jaredgit').getGithub()).toBe('Jaredgit');
        });
    });
    describe("getRole",() => {
        it("should return 'Engineer'", () => {
            expect(new Engineer('Jared','J','Jared@gmail.com','Jaredgit').getRole()).toBe('Engineer');
        });
    });
});