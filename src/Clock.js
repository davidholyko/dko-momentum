import React, { Component } from 'react'
import moment from 'moment'

class Background extends Component {
  constructor () {
    super()

    this.state = {
      hoverClock: false,
      clock: '',
      date: ''
    }
  }

  componentDidMount () {
    const updateDate = () => this.setState({ date: moment().format('MMMM Do YYYY') })
    const updateClock = () => this.setState({ clock: moment().format('h:mm:ss a') })
    setInterval(updateClock, 500)
    setInterval(updateDate, 500)
  }

  hoverClock = () => this.setState({ hoverClock: !this.state.hoverClock })

  render () {
    const styleClock = {
      'fontSize': '10rem',
      'textShadow': '0 20px 20px black'
    }

    const styleClockInverse = {
      'fontSize': '10rem',
      'textShadow': '0 20px 20px white',
      'fontColor': 'black'
    }

    const styleDate = {
      'fontSize': '2rem',
      'textShadow': '0 20px 20px black'
    }
    const { date, clock, hoverClock } = this.state

    return (

      <div className="fixed-top d-flex flex-column w-100 h-100 justify-content-center">
        <h1 className="fixed-top p-2 text-light ml-auto" style={styleDate}>{date}</h1>
        <h1 className="d-inline-block text-light text-center" style={hoverClock ? styleClock : styleClockInverse} onMouseEnter={this.hoverClock}>{clock}</h1>
      </div>
    )
  }
}

export default Background
