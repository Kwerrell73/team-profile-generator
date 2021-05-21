const Manager = require('../lib/manager.js');

test('testing for type', () => {
    const manager = new Manager ();
    expect(typeof(manager)).toBe('object');
    })