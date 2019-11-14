const reactContainer = document.getElementById('react-container')

const makeNewTodo = todoText => ({
  id: _.uniqueId(),
  text: todoText,
  timeStamp: Date.now(),
  completed: false
})


const NewTodo = ({newTodoSubmit}) => {
  const [todoInputText, updateTodoInputText] = React.useState('')

  const handle_newTodoChange = e => {
    const inputText = e.target.value
    updateTodoInputText(inputText)
  }

  const handle_newTodoSubmit = e => {
    e.preventDefault()
    const formElements = e.target.elements
    const newTodoText = formElements['new-todo'].value

    newTodoSubmit( makeNewTodo(newTodoText) )
    updateTodoInputText('')
  }

  return (
    <div>
      <form onSubmit={handle_newTodoSubmit}>
        <label htmlFor="new-todo">Enter todo here:{' '}</label>
        <input
          type="text"
          onChange={handle_newTodoChange}
          id="new-todo"
          value={todoInputText}
        />
      </form>
    </div>
  )
}



const MyApp = () => {
  const [todo, updateTodo] = React.useState({})

  const handle_newTodo = newTodo => {
    updateTodo(newTodo)
  }

  return(
    <div>
     <NewTodo newTodoSubmit={handle_newTodo} />
     <code><pre>{JSON.stringify(todo, null, 2)}</pre></code>
    </div>
  )
}


ReactDOM.render(<MyApp />, reactContainer)

