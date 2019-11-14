const reactContainer = document.getElementById('react-container')

//
// Synthetic event
// ===============
// a cross-browser wrapper around the browser’s native event.
//
// Support Events:
//    https://reactjs.org/docs/events.html#supported-events
//

const MyApp = () => {
  const handle_formSubmit = syntheticEvent => {
    syntheticEvent.preventDefault()
    const message = syntheticEvent.target.elements.message.value
    console.log(`your message is: ${message}`)
  }

  return(
    <form onSubmit={handle_formSubmit}>
      <label htmlFor="message">message: <input type="text" id="message" /></label>
    </form>
  )
}

// But how to show message in the dom? (next >>)


ReactDOM.render(<MyApp />, reactContainer)
