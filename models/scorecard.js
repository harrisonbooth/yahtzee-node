class Scorecard {
  constructor(roller) {
    this.dice = [null, null, null, null, null]
    this.roller = roller
  }

  roll() {
    this.dice = this.dice.map(this.roller)
  }
}

module.exports = Scorecard
