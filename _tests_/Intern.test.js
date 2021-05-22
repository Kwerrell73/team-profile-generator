const Intern = require('../lib/intern.js');

test('testing for type', () => {
    const intern = new Intern ();
    expect(typeof(intern)).toBe('object');
    })

    test("getRole() should return \"Intern\"", () => {
        const testValue = "Intern";
        const intern = new Intern("Dragon", 1, "test@disney.com", "UofA");
        expect(intern.getRole()).toBe(testValue);
      });

     
      test("test that school can be set via constructor", () => {
        const testValue = "UofA";
        const intern = new Intern("Dragon", 1, "test@disney.com", testValue);
        expect(intern.school).toBe(testValue);
      });  


      