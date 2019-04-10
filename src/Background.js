import React, { Component } from 'react'
import BackgroundImage0 from './images/background-0.jpg'
import BackgroundImage1 from './images/background-1.jpg'
import BackgroundImage2 from './images/background-2.jpg'
import BackgroundImage3 from './images/background-3.jpg'
import BackgroundImage4 from './images/background-5.jpg'

class Background extends Component {
  constructor () {
    super()

    this.state = {
      currentImage: BackgroundImage0,
      images:
      [ BackgroundImage0,
        BackgroundImage1,
        BackgroundImage2,
        BackgroundImage3,
        BackgroundImage4 ]
    }
  }

  componentDidMount () {
    const chooseImage = () => this.setState({ currentImage: this.state.images[(Math.random() * 5) | 0] })
    setInterval(chooseImage, 5000)
  }

  render () {
    const style = {
      'objectFit': 'fill',
      'maxHeight': '100vh',
      'overflowY': 'hidden'
    }

    return (
      <div className="w-100 h-100">
        <img key={this.state.currentImage} className="w-100 h-100 fadeIn animated slow" style={style} src={this.state.currentImage}></img>
      </div>
    )
  }
}

export default Background
