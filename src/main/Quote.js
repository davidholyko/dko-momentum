import React, { Component } from 'react'
import { quotes } from './ListOfQuotes'

class Quote extends Component {
  constructor () {
    super()

    this.state = {
      quote: this.randomQuote()
    }
  }

  componentDidMount () {
    const updateQuote = () => this.setState({ quote: this.randomQuote() })
    setInterval(updateQuote, 5000)
  }

  randomQuote = () => {
    const randomNumber = (Math.random() * quotes.length) | 0
    return quotes[randomNumber]
  }

  render () {
    const { quote } = this.state

    const fullQuote = <h4 id="quote" className="text-light text-shadow-close animated slideInLeft">&quot;{quote.quote}&quot; by {quote.author}</h4>

    return (
      <div className="fixed-bottom ">
        {quote ? fullQuote : ''}
      </div>
    )
  }
}

export default Quote
