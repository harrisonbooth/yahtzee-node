const assert = require('assert')
const rollDie = require('../models/rollDie')

suite('Die function', () => {
  test('should roll between a 1 and the number passed', () => {
    const upperLimits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 30, 560, 9999]
    upperLimits.forEach(upperLimit => {
      const roll = rollDie(upperLimit)
      assert(roll >= 1 && roll <= upperLimit)
    })
  })
})
