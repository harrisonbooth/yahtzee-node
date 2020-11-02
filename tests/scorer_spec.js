const assert = require('assert')
const scorer = require('../models/scorer')

suite('Scorer', () => {
  suite('upper set', () => {
    test('it should score aces (present)', () => {
      assert.strictEqual(scorer.aces([1, 1, 1, 2, 2]), 3)
    })

    test('it should score aces (not present)', () => {
      assert.strictEqual(scorer.aces([2, 2, 2, 2, 2]), 0)
    })

    test('it should score twos (present)', () => {
      assert.strictEqual(scorer.twos([2, 2 , 2, 1, 1]), 6)
    })

    test('it should score twos (not present)', () => {
      assert.strictEqual(scorer.twos([1, 1, 1, 1, 1]), 0)
    })

    test('it should score threes (present)', () => {
      assert.strictEqual(scorer.threes([3, 3, 3, 1, 1]), 9)
    })

    test('it should score threes (not present)', () => {
      assert.strictEqual(scorer.threes([1, 1, 1, 1, 1]), 0)
    })

    test('it should score fours (present)', () => {
      assert.strictEqual(scorer.fours([4, 4, 4, 1, 1]), 12)
    })

    test('it should score fours (not present)', () => {
      assert.strictEqual(scorer.fours([1, 1, 1, 1, 1]), 0)
    })

    test('it should score fives (present)', () => {
      assert.strictEqual(scorer.fives([5, 5, 5, 1, 1]), 15)
    })

    test('it should score fives (not present)', () => {
      assert.strictEqual(scorer.fives([1, 1, 1, 1, 1]), 0)
    })

    test('it should score sixes (present)', () => {
      assert.strictEqual(scorer.sixes([6, 6, 6, 1, 1]), 18)
    })

    test('it should score sixes (not present)', () => {
      assert.strictEqual(scorer.sixes([1, 1, 1, 1, 1]), 0)
    })
  })
})
