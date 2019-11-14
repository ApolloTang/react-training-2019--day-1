const reactContainer = document.getElementById('react-container')

// [Activity]
//
//   Explain it is easy to use proposal-class-properties
//


class MyApp extends React.Component {
  state = {  // [1]
    message: ''
  }

  handle_formSubmit = (syntheticEvent) => { // [2]
    syntheticEvent.preventDefault()
    const message = syntheticEvent.target.elements.message.value
    this.setState({message})
  }

  render() {
    return(
      <>
        <div>Your message: {this.state.message}</div>
        <form onSubmit={this.handle_formSubmit}>
          <label htmlFor="message">message: <input type="text" id="message" /></label>
        </form>
      </>
    )
  }
}


//
// The above syntax used the proposal-class-properties
// This is how your Component class looks like if not using proposal-class-properties
//

class MyApp_unccessaryVerbose extends React.Component {
  constructor() {
    super()
    this.state = {message:''}
    this.handle_formSubmit = this.handle_formSubmit.bind(this)  // <-- so that 'this' is available in your method
  }

  handle_formSubmit (syntheticEvent) {
    syntheticEvent.preventDefault()
    const message = syntheticEvent.target.elements.message.value
    this.setState({message})
  }

  render() {
    return(
      <>
        <div>Your message: {this.state.message}</div>
        <form onSubmit={this.handle_formSubmit}>
          <label htmlFor="message">message: <input type="text" id="message" /></label>
        </form>
      </>
    )
  }
}

// ReactDOM.render(<MyApp />, reactContainer)
ReactDOM.render(<MyApp_unccessaryVerbose />, reactContainer)






// Reference:
//
// [1] Field declarations:
//
//   https://github.com/tc39/proposal-class-fields#field-declarations
//
// [2] class arrow method:
//
//   https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
//   https://medium.com/@jacobworrel/babels-transform-class-properties-plugin-how-it-works-and-what-it-means-for-your-react-apps-6983539ffc22
//   https://stackoverflow.com/questions/31362292/how-to-use-arrow-functions-public-class-fields-as-class-methods
//   https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1


