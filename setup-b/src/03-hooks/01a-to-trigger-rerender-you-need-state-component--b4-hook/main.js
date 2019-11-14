const reactContainer = document.getElementById('react-container')

// [Activity]
//
// Observe how class is converted to a simple function
// in example 1a --> 1b
//


class MyApp extends React.Component {
  state = { message: '' }   // <--- this will be replaced

  handle_formSubmit = e => {
    e.preventDefault()

    const message = e.target.elements.message.value
    this.setState({message}) // <--- this will be replaced
  }

  render() {
    return(
      <>
        <div>Your message: {this.state.message}</div>
        <form onSubmit={this.handle_formSubmit}>
          <label htmlFor="message">message: <input type="text" id="message" /></label>
        </form>
        <p> press return to update </p>
      </>
    )
  }
}





ReactDOM.render(<MyApp />, reactContainer)
