const Intern = require('../lib/intern.js');

test('testing for type', () => {
    const intern = new Intern ();
    expect(typeof(intern)).toBe('object');
    })