// Write your code here.
import './index.css'
import {Component} from 'react'

class LetterCalculator extends Component {
  state = {count: 0, searchInput: ''}

  onChangeText = event => {
    this.setState({
      searchInput: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {count, searchInput} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calci-img-small"
        />
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label-element" htmlFor="input-id">
            Enter the phrase
          </label>
          <input
            id="input-id"
            value={searchInput}
            className="input-element"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeText}
          />

          <p className="butt-element">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calci-img"
        />
      </div>
    )
  }
}

export default LetterCalculator
