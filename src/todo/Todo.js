import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todo extends Component {
  constructor () {
    super()

    this.state = {
      text: '',
      todoList: [],
      toggleTodo: false
    }
  }

  handleChange = event => this.setState({ text: event.target.value })

  enter = event => {
    if (event.key === 'Enter') {
      this.addTodoItem(event)
    }
  }

  addTodoItem = event => {
    event.preventDefault()
    if (!this.state.text) { return }
    const previousListItems = [...this.state.todoList]
    previousListItems.push(this.state.text)
    this.setState({ todoList: previousListItems, text: '' })
  }

  toggleTodo = () => this.setState({ toggleTodo: !this.state.toggleTodo })

  render () {
    const { todoList, text, toggleTodo } = this.state

    const position = {
      'position': 'absolute',
      'bottom': '0',
      'right': '0',
      'zIndex': 2000
    }

    const todoContainer = <div id="todo-item-container" className="text-left">
      <h5 className="text-light text-center">Todo List</h5>
      <div id="todo-item-content">
        {todoList.map((item, index) => <TodoItem text={item} key={index}/>)}
      </div>
    </div>

    const todoForm =
    <form onKeyDown={this.enter}>
      <input
        id="todo-form"
        className="m-0"
        onChange={this.handleChange}
        value={text}
        placeholder="Add a Todo to get started"
      />
    </form>

    return (
      <div className="text-right m-0 w-100" style={ position }>
        {toggleTodo ? todoContainer : ''}
        {toggleTodo ? todoForm : ''}
        <h3 id="todo-toggle" className="p-2" onClick={this.toggleTodo}>Todo</h3>
      </div>
    )
  }
}

export default Todo
