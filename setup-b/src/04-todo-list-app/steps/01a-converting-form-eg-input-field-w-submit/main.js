const reactContainer = document.getElementById('react-container')


// ==============================================
//
// We already have the form from example:
//
//    03-hooks/06b-from-eg--input-field-w-submit
//
// just have to rename:
//
//   Message --> Todo
//   message --> todo
//
// ==============================================

const NewMessage = ({newMessageSubmit}) => {
  const [messageInputText, updateMessageInputText] = React.useState('')

  const handle_newMessageChange = e => {
    const inputText = e.target.value
    updateMessageInputText(inputText)
  }

  const handle_newMessageSubmit = e => {
    e.preventDefault()
    const formElements = e.target.elements
    const newMessageText = formElements['new-message'].value

    newMessageSubmit(newMessageText)
    updateMessageInputText('')
  }

  return (
    <div>
      <form onSubmit={handle_newMessageSubmit}>
        <label htmlFor="new-message">Enter message here:{' '}</label>
        <input
          type="text"
          onChange={handle_newMessageChange}
          id="new-message"
          value={messageInputText}
        />
      </form>
    </div>
  )
}



const MyApp = () => {
  const [message, updateMessage] = React.useState('')

  const handle_newMessage = newMessage => {
    updateMessage(newMessage)
  }

  return(
    <div>
     <NewMessage newMessageSubmit={handle_newMessage} />
     <div>Message: {message} </div>
    </div>
  )
}


ReactDOM.render(<MyApp />, reactContainer)


/*

  :%s/\CMessage/Todo/gc
  :%s/\Cmessage/todo/gc

*/
