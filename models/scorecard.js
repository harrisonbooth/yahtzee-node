class Scorecard {
  constructor(roller) {
    this.dice = [null, null, null, null, null]
    this.held = []
    this.roller = roller
  }

  roll() {
    this.dice = this.dice.map(this.roller)
  }

  toggleHold(...indices) {
    this.held = [
      ...indices.filter(index => !this.held.includes(index)),
      ...this.held.filter(index => !indices.includes(index))
    ]
  }
}

module.exports = Scorecard
