import {Component} from 'react'

import './index.css'
/*Component  C in capital letter*/
class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    /*count value should in {}  object destructuring*/
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    /*count value should in {}  object destructuring*/

    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
