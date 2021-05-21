const Engineer = require('../lib/engineer.js');

test('testing for type', () => {
    const engineer = new Engineer ();
    expect(typeof(engineer)).toBe('object');
    })