import React, { Component } from 'react'
import Name from './Name'
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
    const updateClock = () => this.setState({ clock: moment().format('h:mm:ss A') })
    setInterval(updateClock, 500)
    setInterval(updateDate, 10000)
  }

  hoverClock = () => this.setState({ hoverClock: !this.state.hoverClock })

  render () {
    const styleClock = {
      'fontSize': '10rem',
      'textShadow': '0px 10px 10px white, 0px -10px 10px white, 10px 0px 10px white, -10px 0px 10px white'
    }

    const styleClockInverse = {
      'fontSize': '10rem',
      'textShadow': '0 20px 20px black'
    }

    const styleDate = {
      'fontSize': '2rem'
    }

    const { date, clock, hoverClock } = this.state

    return (

      <div className="fixed-top d-flex flex-column h-100 justify-content-center">
        <h1 className="fixed-top p-2 text-light ml-auto" style={styleDate}>{date}</h1>
        <h1 className={hoverClock ? 'text-center text-dark' : 'text-center text-light'} style={hoverClock ? styleClock : styleClockInverse} onMouseEnter={this.hoverClock} onMouseLeave={this.hoverClock}>{clock}</h1>
        <Name />
      </div>
    )
  }
}

export default Background
