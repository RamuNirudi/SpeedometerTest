import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevstate => ({count: prevstate.count + 10}))
    }
  }

  onApplyBrakes = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevstate => ({count: prevstate.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER </h1>
        <img
          className="pic alt"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h2 className="subheading">Speed is {count}mph </h2>
        <p className="paragraph1">Min Limit is 0mph, Max Limit is 200mph </p>
        <div className="button-container">
          <button
            className="btn first-button"
            type="button"
            onClick={this.onAccelerate}
          >
            {' '}
            Accelerate{' '}
          </button>
          <button
            className="btn second-button"
            type="button"
            onClick={this.onApplyBrakes}
          >
            {' '}
            Apply Brakes{' '}
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
