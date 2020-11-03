class Scorecard {
  constructor(roller, scorer) {
    this.dice = [null, null, null, null, null]
    this.held = []
    this.roller = roller
    this.scorer = scorer
  }

  roll() {
    this.dice = this.dice.map((currentValue, index) => {
      return (this.held.includes(index)) ? currentValue : this.roller()
    })
  }

  toggleHold(...indices) {
    this.held = [
      ...indices.filter(index => !this.held.includes(index) && this.dice[index]),
      ...this.held.filter(index => !indices.includes(index))
    ]
  }

  clearHeld() {
    this.held = []
  }

  score(functionName) {
    return this.scorer[functionName](this.dice)
  }
}

module.exports = Scorecard
