import React, { Component } from 'react'
import Welcome from './Welcome'
import moment from 'moment'

class Background extends Component {
  constructor () {
    super()

    this.state = {
      clock: '',
      date: ''
    }
  }

  componentDidMount () {
    const updateDate = () => this.setState({ date: moment().format('MMMM Do YYYY') })
    const updateClock = () => this.setState({ clock: moment().format('h:mm:ss A') })
    setInterval(updateClock, 500)
    setInterval(updateDate, 1000)
  }

  render () {
    const styleDate = {
      'fontSize': '2rem'
    }

    const { date, clock } = this.state

    return (
      <div className="fixed-top d-flex flex-column h-100 justify-content-center">
        <h1 className="fixed-top p-2 text-light ml-auto" style={styleDate}>{date}</h1>
        <div className="d-flex justify-content-center">
          <h1 id="clock" >
            {clock}
          </h1>
        </div>
        <Welcome />
      </div>
    )
  }
}

export default Background
