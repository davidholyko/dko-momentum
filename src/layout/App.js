import React from 'react'
import Background from './Background'
import Clock from '../main/Clock'
import Todo from '../todo/Todo'
// import { Route, Link } from 'react-router-dom'

const App = () => (
  <div>
    <Background />
    <Clock />
    <Todo />
  </div>
)

export default App
