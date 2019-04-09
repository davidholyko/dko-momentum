import React, { Component } from 'react'
import moment from 'moment'

class Background extends Component {
  constructor () {
    super()

    this.state = {
      clock: ''
    }
  }

  componentDidMount () {
    const updateClock = () => this.setState({ clock: moment().format('MMMM Do YYYY, h:mm:ss a') })
    setInterval(updateClock, 500)
  }

  render () {
    const style = {
      'fontSize': '5rem'
    }

    return (
      <div className="fixed-top d-flex flex-column justify-content-center w-100 h-100">
        <h1 className="d-inline-block text-light text-center" style={style}>{this.state.clock}</h1>
      </div>
    )
  }
}

export default Background
