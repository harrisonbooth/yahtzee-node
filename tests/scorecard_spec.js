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

  test('should be able to hold dice', () => {
    scorecard.roll()
    scorecard.toggleHold(0, 1, 2)
    assert.deepStrictEqual(scorecard.held, [0, 1, 2])
  })

  test('should be able to unhold dice', () => {
    scorecard.roll()
    scorecard.toggleHold(0, 1, 2, 3, 4)
    scorecard.toggleHold(3, 4)
    assert.deepStrictEqual(scorecard.held, [0, 1, 2])
  })

  test('should not be able to hold null', () => {
    scorecard.toggleHold(0, 1, 2)
    assert.deepStrictEqual(scorecard.held, [])
  })

  test('should be able to clear held', () => {
    scorecard.roll()
    scorecard.toggleHold(0, 1, 2)
    scorecard.clearHeld()
    assert.deepStrictEqual(scorecard.held, [])
  })

  test('should only roll unheld dice', () => {
    for(let i = 0; i < 20; i++) {
      scorecard.clearHeld()
      scorecard.roll()
      const scores = scorecard.dice
      scorecard.toggleHold(0, 1, 2)
      scorecard.roll()
      const newScores = scorecard.dice

      assert.strictEqual(newScores[0], scores[0])
      assert.strictEqual(newScores[1], scores[1])
      assert.strictEqual(newScores[2], scores[2])
    }
  })
})
