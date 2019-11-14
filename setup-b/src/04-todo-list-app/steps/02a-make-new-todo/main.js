const reactContainer = document.getElementById('react-container')



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

    newTodoSubmit(newTodoText)
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
  const [todo, updateTodo] = React.useState('')

  const handle_newTodo = newTodo => {
    updateTodo(newTodo)
  }

  return(
    <div>
     <NewTodo newTodoSubmit={handle_newTodo} />
     <div>Todo: {todo} </div>
    </div>
  )
}


ReactDOM.render(<MyApp />, reactContainer)


/*

const makeNewTodo = todoText => ({
  id: _.uniqueId(),
  text: todoText,
  timeStamp: Date.now(),
  completed: false
})


newTodoSubmit( makeNewTodo(newTodoText) )

 const [todo, updateTodo] = React.useState({}) //
                                          ^^^^
                                          b/c we are now submiting
                                          an new todo object instead of
                                          simple string

 <code><pre>{JSON.stringify(todo, null, 2)}</pre></code>

*/
