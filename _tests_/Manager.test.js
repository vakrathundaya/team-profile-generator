const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getName",() => {
        it("should return the 'name' property of the Manager object", () => {
            expect(new Manager('Jared','J','Jared@gmail.com',1).getName()).toBe('Jared');
        });
    });
    describe("getId",() => {
        it("should return the 'id' property of the Manager object", () => {
            expect(new Manager('Jared','J','Jared@gmail.com',1).getId()).toBe('J');
        });
    });
    describe("getEmail",() => {
        it("should return the 'email' property of the Manager object", () => {
            expect(new Manager('Jared','J','Jared@gmail.com',1).getEmail()).toBe('Jared@gmail.com');
        });
    });
    describe("getRole",() => {
        it("should return 'Manager'", () => {
            expect(new Manager('Jared','J','Jared@gmail.com',1).getRole()).toBe('Manager');
        });
    });
});