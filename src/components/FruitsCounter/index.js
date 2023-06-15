import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            Bob ate <span className="counter">{mangoCount}</span> mangoes{' '}
            <span className="counter">{bananaCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="img-btn-container">
              <img
                className="card-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />

              <button
                className="button"
                type="button"
                onClick={this.onMangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="img-btn-container">
              <img
                className="card-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />

              <button className="button" type="button">
                Eat Mango
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
