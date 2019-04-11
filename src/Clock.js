import React, { Component, Fragment } from 'react'
import moment from 'moment'

class Background extends Component {
  constructor () {
    super()

    this.state = {
      hoverClock: false,
      openForm: false,
      name: '',
      clock: '',
      date: '',
      text: ''
    }
  }

  componentDidMount () {
    const updateDate = () => this.setState({ date: moment().format('MMMM Do YYYY') })
    const updateClock = () => this.setState({ clock: moment().format('h:mm:ss A') })
    setInterval(updateClock, 500)
    setInterval(updateDate, 10000)
  }

  hoverClock = () => this.setState({ hoverClock: !this.state.hoverClock })

  enterName = () => {
    if (this.state.name) { return }
    this.setState({ openForm: !this.state.openForm })
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ text: event.target.value })
  }

  enter = event => {
    if (event.key === 'Enter') {
      console.log('enter')
      event.preventDefault()
      this.setState({ name: this.state.text, text: '', openForm: !this.state.openForm })
    }
  }

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

    const styleInput = {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'white',
      border: 0,
      'border-bottom': '3px solid white',
      fontSize: '2rem',
      height: '2rem'
    }

    const { date, clock, hoverClock, text, name, openForm } = this.state
    const namePlaceholder = 'Please click here and enter your name above'
    // const welcomes = ['Good Morning', 'Good Afternoon', 'Good Evening']

    const welcome = `Welcome ${name}`

    const form =
    <Fragment>
      <form className="text-center my-3" onKeyDown={this.enter} action="">
        <input type="text" onChange={this.handleChange} value={text} style={styleInput} autoFocus/>
      </form>
    </Fragment>

    return (

      <div className="fixed-top d-flex flex-column h-100 justify-content-center">
        <h1 className="fixed-top p-2 text-light ml-auto" style={styleDate}>{date}</h1>
        <h1 className={hoverClock ? 'text-center text-dark' : 'text-center text-light'} style={hoverClock ? styleClock : styleClockInverse} onMouseEnter={this.hoverClock} onMouseLeave={this.hoverClock}>{clock}</h1>

        {openForm ? form : ''}
        <h1 className="text-center text-light" onClick={this.enterName}>{name ? welcome : namePlaceholder}</h1>
      </div>
    )
  }
}

export default Background
