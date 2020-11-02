module.exports = {
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
}
