import React, { Component } from 'react'

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      text: '',
      list: []
    }
  }

  handleChange = event => this.setState({ text: event.target.value })

  enter = event => {
    if (event.key === 'Enter') {
      this.addReview()
    }
  }

  addReview = () => {
    if (!this.state.text) { return }
    const previousReviews = [...this.state.list]
    previousReviews.push(this.state.text)
    this.setState({ list: previousReviews, text: '' })
  }

  render () {
    const { list, text } = this.state

    const position = {
      'position': 'absolute',
      'bottom': '0',
      'right': '0',
      'zIndex': 2000
    }

    const textarea = <textarea
      id="todo-form"
      className=""
      onChange={this.handleChange}>
      {text}
    </textarea>

    return (
      <div className="text-right m-0 w-100" style={ position }>
        {list.map(item => <h1 className="text-light" key={item}>{item}</h1>)}
        <textarea
          id="todo-form"
          className="m-0"
          onChange={this.handleChange}
          value={text}
          onKeyDown={this.enter}
          placeholder="Enter a todo item here"
        >
          {text}
        </textarea>
      </div>
    )
  }
}

export default Todo
