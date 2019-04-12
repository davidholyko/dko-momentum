import React from 'react'
import Background from './Background'
import Clock from '../main/Clock'
import Todo from '../todo/Todo'
import Quote from '../main/Quote'
import MyCalendar from '../main/MyCalendar'
// import { Route, Link } from 'react-router-dom'

const App = () => (
  <div className="d-flex flex-column">
    <MyCalendar />
    <Background />
    <Clock />
    <Quote />
    <Todo />
  </div>
)

export default App
