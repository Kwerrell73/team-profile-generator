const Engineer = require('../lib/engineer.js');

test('testing for type', () => {
    const engineer = new Engineer ();
    expect(typeof(engineer)).toBe('object');
    })

    test("testing that GitHub username is returned via getGithub()", () => {
        const testValue = "GitHubUser";
        const engineer = new Engineer("Dragon", 1, "test@disney.com", testValue);
        expect(engineer.getGithub()).toBe(testValue);
      });

      test("testing that GitHUb account can be set via constructor", () => {
        const testValue = "GitHubUser";
        const engineer = new Engineer("Dragon", 1, "test@disney.com", testValue);
        expect(engineer.github).toBe(testValue);
      });

    test("test that getRole() should return \"Engineer\"", () => {
        const testValue = "Engineer";
        const engineer = new Engineer("Dragon", 1, "test@disney.com", "GitHubUser");
        expect(engineer.getRole()).toBe(testValue);
      }); 