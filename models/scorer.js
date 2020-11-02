module.exports = {
  sum: dice => dice.reduce((sum, number) => sum + number),
  count: (dice, die) => dice.reduce((count, d) => (d === die ? count + 1 : count)),
  countNumber(dice, number) {
    return dice
      .reduce((sum, die) => {
        if (die === number) {
          return sum + die
        }
        return sum
      }, 0)
  },
  aces(dice) { return this.countNumber(dice, 1) },
  twos(dice) { return this.countNumber(dice, 2) },
  threes(dice) { return this.countNumber(dice, 3) },
  fours(dice) { return this.countNumber(dice, 4) },
  fives(dice) { return this.countNumber(dice, 5) },
  sixes(dice) { return this.countNumber(dice, 6) },
  threeOfAKind(dice) {
    if (dice.some(die => this.count(dice, die) >= 3)) return this.sum(dice)
    return 0
  },
  fourOfAKind(dice) {
    if (dice.some(die => this.count(dice, die) >= 4)) return this.sum(dice)
    return 0
  }
}
