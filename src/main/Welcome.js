import React, { Component, Fragment } from 'react'
import moment from 'moment'

class Welcome extends Component {
  constructor () {
    super()

    this.state = {
      openForm: false,
      name: '',
      text: '',
      clock: ''
    }
  }

  componentDidMount () {
    const updateClock = () => this.setState({ clock: moment().format('HH:mm:ss A') })
    setInterval(updateClock, 500)
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
    const styleInput = {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'white',
      border: 0,
      borderBottom: '3px solid white',
      fontSize: '2rem',
      height: '2rem'
    }

    const { text, name, openForm, clock } = this.state
    const time = +clock.substring(0, 2)
    const namePlaceholder = 'What\'s your name?'
    let welcome = ''

    if (time < 17) { welcome = 'Good Afternoon' }
    if (time < 12) { welcome = 'Good Morning' }
    if (time < 4 || time > 17) { welcome = 'Good Evening' }
    if (time > 17 && time < 20) { welcome = 'Happy Hour Time' }

    const welcomeMessage = `${welcome}, ${name}.`

    const form =
    <Fragment>
      <form className="text-center my-3" onKeyDown={this.enter} action="">
        <input type="text" onChange={this.handleChange} value={text} style={styleInput} autoFocus/>
      </form>
    </Fragment>

    return (
      <div className="d-flex flex-column justify-content-center">
        {openForm ? form : ''}
        <h1 className="text-center text-light text-shadow" onClick={this.enterName}>
          {name ? welcomeMessage : namePlaceholder}
        </h1>
      </div>
    )
  }
}

export default Welcome
