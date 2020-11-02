module.exports = {
  sum: dice => dice.reduce((sum, number) => sum + number),
  count: (dice, die) => dice.reduce((count, d) => (d === die ? count + 1 : count)),
  countStreak(dice) {
    const uniques = [...new Set(dice)]
    const [_, streaks] = uniques.sort().reduce(([streak, streaks], die, index, dice) => {
      if (Math.abs(dice[index + 1] - die) === 1) {
        return [streak + 1, streaks]
      }
      return [0, [...streaks, streak]]
    }, [0, []])
    return streaks.sort().reverse()[0]
  },
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
    if (dice.some(die => this.count(dice, die) >= 3)) {
      return this.sum(dice)
    }
    return 0
  },
  fourOfAKind(dice) {
    if (dice.some(die => this.count(dice, die) >= 4)) {
      return this.sum(dice)
    }
    return 0
  },
  fullHouse(dice) {
    if (
      dice.some(die => this.count(dice, die) >= 3)
      && [...new Set(dice)].length === 2
    ) {
      return 25
    }
    return 0
  },
  smallStraight(dice) {
    if (this.countStreak(dice) >= 3) {
      return 30
    }
    return 0
  },
  largeStraight(dice) {
    if (this.countStreak(dice) >= 4) {
      return 40
    }
    return 0
  }

}
