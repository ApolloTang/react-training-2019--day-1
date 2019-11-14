const reactContainer = document.getElementById('react-container')

// [Activity]
//
// 1. type in the form to see text show in dom
// 2. use React devtool to inspect component state
//


class MyApp extends React.Component {
  // state is a special property in your compoment
  state = {
    message: ''
  }

  handle_formSubmit = (syntheticEvent) => {
    syntheticEvent.preventDefault()

    const message = syntheticEvent.target.elements.message.value
    this.setState({message}) // when you call setState the v-dom rerendered
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
