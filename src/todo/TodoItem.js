import React, { Component } from 'react'

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      isComplete: false
    }
  }

  toggleComplete = () => {
    console.log('toggleComplete')
    this.setState({ isComplete: !this.state.isComplete })
  }

  render () {
    const { isComplete } = this.state
    const classes = 'd-inline-block my-1 text-light'

    return (
      <div className="d-flex">
        <input type="checkbox" onChange={this.toggleComplete} checked={isComplete} className="m-2"/>
        <p className={isComplete ? classes + ' line-through' : classes}>
          {this.props.text}
        </p>
      </div>
    )
  }
}

export default Todo
