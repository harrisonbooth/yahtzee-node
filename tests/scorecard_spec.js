const assert = require('assert')
const Scorecard = require('../models/scorecard')
const rollDie = require('../models/rollDie')

suite('Scorecard', () => {
  let scorecard

  setup(() => {
    const roller = () => rollDie(6)
    scorecard = new Scorecard(roller)
  })

  test('should have 5 initial null dice', () => {
    assert.deepStrictEqual(
      scorecard.dice,
      [null, null, null, null, null]
    )
  })

  test('should be able to roll dice and change values', () => {
    scorecard.roll()
    assert.notDeepStrictEqual(
      scorecard.dice,
      [null, null, null, null, null]
    )
  })

  test('should be able to roll dice and store results', () => {
    scorecard.roll()
    scorecard.dice.forEach(dieValue => {
      assert.strictEqual(typeof dieValue, 'number')
    })
  })
})
