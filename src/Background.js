import React, { Component } from 'react'
import BackgroundImage from './images/background-0.jpg'

class Background extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    const style = {
      'objectFit': 'fill',
      'maxHeight': '100vh',
      'overflowY': 'hidden'
    }
    return (
      <div className="w-100 h-100">
        <img className="w-100 h-100" style={style} src={BackgroundImage}></img>
      </div>
    )
  }
}

export default Background
