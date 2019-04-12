import React, { Component } from 'react'
import Calendar from 'react-calendar'

class MyCalendar extends Component {
  constructor () {
    super()

    this.state = {
      openCalendar: false
    }
  }

  componentDidMount () {
  }

  openCalendar = () => this.setState({ openCalendar: !this.state.openCalendar })

  render () {
    const { openCalendar } = this.state
    const calendar = <Calendar className="" calendarType="US"/>

    return (
      <div id="calendar">
        <h3 onClick={this.openCalendar} className="">Toggle Calendar</h3>
        {openCalendar ? calendar : ''}
      </div>
    )
  }
}

export default MyCalendar
