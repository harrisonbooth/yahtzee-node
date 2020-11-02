class Scorecard {
  constructor(roller) {
    this.dice = [null, null, null, null, null]
    this.held = []
    this.roller = roller
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
}

module.exports = Scorecard
