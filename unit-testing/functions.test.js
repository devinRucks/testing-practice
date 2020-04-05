const add = require('./functions').add
const isNull = require('./functions').isNull
const checkValue = require('./functions').checkValue
const createUser = require('./functions').createUser
const fetchUser = require('./functions').fetchUser

test('Adds 2 + 2 to equal 4', () => {
     expect(add(2, 2)).toBe(4);
})

test('Adds 2 + 2 to NOT equal 5', () => {
     expect(add(2, 2)).not.toBe(5);
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
     expect(isNull()).toBeNull();
})

// toBeFalsy
test('Should be falsy', () => {
     expect(checkValue(undefined)).toBeFalsy();
})

// toBe is only for primitive data types. use toEqual for objects and arrays
test('User should be Devin Rucks', () => {
     expect(createUser()).toEqual({
          firstName: 'Devin',
          lastName: 'Rucks'
     });
})
// Less than and greater than
test('Should be under 1600', () => {
     const load1 = 800;
     const load2 = 800;
     expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('There is no I in team', () => {
     expect('team').not.toMatch(/I/)
})

// Arrays
test('Admin should be in usernames', () => {
     usernames = ['john', 'karen', 'admin']
     expect(usernames).toContain('admin')
})

// Working with async data
// ** ISSUE WITH JSONPLACEHOLDER API **
// test('User fetched name should be Leanne Graham', () => {
//      expect.assertions(1);
//      return fetchUser().then(data => {
//           expect(data.name).toEqual('Leanne Graham')
//      })
// })