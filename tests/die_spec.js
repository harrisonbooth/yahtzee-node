const assert = require('assert')
const rollDie = require('../models/die')

suite('Die function', () => {
  test('should roll between a 1 and the number passed', () => {
    const roll = rollDie(6)
    assert(roll >= 1 && roll <= 6)
  })
})
