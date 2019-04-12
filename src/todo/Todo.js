import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      text: '',
      todoList: []
    }
  }

  handleChange = event => this.setState({ text: event.target.value })

  enter = event => {
    if (event.key === 'Enter') {
      this.addTodoItem()
    }
  }

  addTodoItem = () => {
    if (!this.state.text) { return }
    const previousListItems = [...this.state.todoList]
    previousListItems.push(this.state.text)
    this.setState({ todoList: previousListItems, text: '' })
  }

  render () {
    const { todoList, text } = this.state

    const position = {
      'position': 'absolute',
      'bottom': '0',
      'right': '0',
      'zIndex': 2000
    }

    return (
      <div className="text-right m-0 w-100" style={ position }>
        <div id="todo-item-container" className="text-left">
          <h5 className="text-light text-center">Todo List</h5>
          <div id="todo-item-content">
            {todoList.map((item, index) => <TodoItem text={item} key={index}/>)}
          </div>
        </div>
        <form action="">
          <input
            id="todo-form"
            className="m-0"
            onChange={this.handleChange}
            value={text}
            onKeyDown={this.enter}
            placeholder="Enter a todo item here"
          />
        </form>
      </div>
    )
  }
}

export default Todo
