const reactContainer = document.getElementById('react-container')

//
// This is same as
// 01a-to-trigger-rerender-you-need-state-component--b4-hook
// but class is now removed and converted to hook
//


const MyApp = () => {
  const [message, updateMessage] = React.useState('')

  const handle_formSubmit = e => {
    e.preventDefault()

    const message = e.target.elements.message.value
    updateMessage(message) // when you call updateMessage the v-dom rerendered
  }


  return(
    <>
      <div>Your message: {message}</div>
      <form onSubmit={handle_formSubmit}>
        <label htmlFor="message">message: <input type="text" id="message" /></label>
      </form>
      <p> press return to update </p>
    </>
  )
}






ReactDOM.render(<MyApp />, reactContainer)
