const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName",() => {
        it("should return the 'name' property of the Employee object", () => {
            expect(new Employee('Jared','J','Jared@gmail.com').getName()).toBe('Jared');
        });
    });
    describe("getId",() => {
        it("should return the 'id' property of the Employee object", () => {
            expect(new Employee('Jared','J','Jared@gmail.com').getId()).toBe('J');
        });
    });
    describe("getEmail",() => {
        it("should return the 'email' property of the Employee object", () => {
            expect(new Employee('Jared','J','Jared@gmail.com').getEmail()).toBe('Jared@gmail.com');
        });
    });
    describe("getRole",() => {
        it("should return 'Employee'", () => {
            expect(new Employee('Jared','J','Jared@gmail.com').getRole()).toBe('Employee');
        });
    });
});