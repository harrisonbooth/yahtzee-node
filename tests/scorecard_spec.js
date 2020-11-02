const assert = require('assert')
const Scorecard = require('../models/scorecard')

suite('Scorecard', () => {
  let scorecard

  setup(() => {
    scorecard = new Scorecard()
  })

  test('should have 5 initial null dice', () => {
    assert.deepStrictEqual(
      scorecard.dice,
      [null, null, null, null, null]
    )
  })
})
