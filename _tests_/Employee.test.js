const Employee = require('../lib/employee.js');

test('testing for type', () => {
const employee = new Employee ();
expect(typeof(employee)).toBe('object');
})

//test('creates an enemy object', () => {
//    const enemy = new Enemy('goblin', 'sword');

//    expect(enemy.name).toBe('goblin');
//    expect(enemy.weapon).toBe('sword');
//    expect(enemy.health).toEqual(expect.any(Number));
//    expect(enemy.strength).toEqual(expect.any(Number));
//    expect(enemy.agility).toEqual(expect.any(Number));
//    expect(enemy.potion).toEqual(expect.any(Object));
 // });