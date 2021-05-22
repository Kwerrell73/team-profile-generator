const Manager = require('../lib/manager.js');

test('testing for type', () => {
    const manager = new Manager ();
    expect(typeof(manager)).toBe('object');
    })


    test("test that office number can be set via constructor argument", () => {
        const testValue = 100;
        const manager = new Manager("Foo", 1, "test@test.com", testValue);
        expect(manager.officeNumber).toBe(testValue);
      });

      test("test that office number is obtained via getOffice()", () => {
        const testValue = 100;
        const manager = new Manager("Dragon", 1, "test@disney.com", testValue);
        expect(manager.getOfficeNumber()).toBe(testValue);
      });

      test("getRole() should return \"Manager\"", () => {
        const testValue = "Manager";
        const manager = new Manager("Dragon", 1, "test@disney.com", 100);
        expect(manager.getRole()).toBe(testValue);
      });

      
