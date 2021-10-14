// because load module from github and source is not built...
import Nano, { Component, defineAsCustomElements } from 'nano-jsx/src/index'

class Counter extends Component {
  value = 0

  static style = `
button {
  font-size: 18px;
  background: pink;
  color: white;
  border-color: white;
  border-radius: 2px;
  margin: 12px;
}
`

  changeValue(newValue: number) {
    this.value += newValue
    this.update()
  }

  render() {
    return (
      <div class='counter'>
        <div>Counter: {this.value}</div>
        <button onClick={() => this.changeValue(1)}>Increment</button>
        <button onClick={() => this.changeValue(-1)}>Decrement</button>
        <style>
          {Counter.style}
        </style>
      </div>
    )
  }
}

defineAsCustomElements(<Counter />, 'nano-counter')
