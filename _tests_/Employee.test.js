const Employee = require('../lib/employee.js');

test('testing for type', () => {
const employee = new Employee ();
expect(typeof(employee)).toBe('object');
})

 
  test("test that name can be set via constructor arguments", () => {
    const name = "Julia";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  test("test that email can be set via getEmail()", () => {
    const testValue = "test@disney.com";
    const employee = new Employee("Dragon", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
  });

  test("test that email can be set via constructor argument", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.email).toBe(testValue);
  });
  