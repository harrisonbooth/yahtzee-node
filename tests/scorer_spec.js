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

  suite('lower set', () => {
    test('it should score three of a kind (present)', () => {
      assert.strictEqual(scorer.threeOfAKind([3, 3, 3, 1, 1]), 11)
    })

    test('it should score three of a kind (not present)', () => {
      assert.strictEqual(scorer.threeOfAKind([1, 2, 3, 4, 5]), 0)
    })

    test('it should score four of a kind (present)', () => {
      assert.strictEqual(scorer.fourOfAKind([3, 3, 3, 3, 1]), 13)
    })

    test('it should score four of a kind (not present)', () => {
      assert.strictEqual(scorer.fourOfAKind([1, 2, 3, 4, 5]), 0)
    })

    test('it should score a full house (present)', () => {
      assert.strictEqual(scorer.fullHouse([3, 3, 3, 1, 1]), 25)
    })

    test('it should score a full house (not present)', () => {
      assert.strictEqual(scorer.fullHouse([1, 2, 3, 4, 5]), 0)
    })

    test('it should score a small straight (present)', () => {
      assert.strictEqual(scorer.smallStraight([1, 2, 3, 4, 1]), 30)
    })

    test('it should score a small straight (not present)', () => {
      assert.strictEqual(scorer.smallStraight([1, 1, 1, 1, 1]), 0)
    })

    test('it shoould score a large straight (present)', () => {
      assert.strictEqual(scorer.largeStraight([1, 2, 3, 4, 5]), 40)
    })

    test('it shoould score a large straight (not present)', () => {
      assert.strictEqual(scorer.largeStraight([1, 2, 3, 4, 1]), 0)
    })

    test('it should score a yahtzee (present)', () => {
      assert.strictEqual(scorer.largeStraight([1, 1, 1, 1, 1]), 50)
    })

    test('it should score a yahtzee (not present)', () => {
      assert.strictEqual(scorer.yahtzee([1, 1, 1, 1, 3]), 0)
    })

    test('it should score a yahtzee (with true to signify bonus)', () => {
      assert.strictEqual(scorer.yahtzee([1, 1, 1, 1, 1], true), 100)
    })

    test('it should score chance', () => {
      assert.strictEqual(scorer.chance([1, 2, 2, 3, 3]), 11)
    })
  })
})
