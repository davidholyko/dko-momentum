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
      <div className="d-flex justify-content-center w-100" style={ position }>
        <div className="d-flex flex-column justify-content-center w-50">
          {list.map(item => <h1 className="text-light" key={item}>{item}</h1>)}
          <textarea
            id="todo-form"
            className=""
            onChange={this.handleChange}
            value={text}>
            {text}
          </textarea>
          <button className="btn btn-primary" onClick={this.addReview}>Save</button>
        </div>
      </div>
    )
  }
}

export default Todo
