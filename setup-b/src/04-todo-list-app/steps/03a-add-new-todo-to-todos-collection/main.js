const reactContainer = document.getElementById('react-container')

/*

Now <NewTodo /> can create a newTodo object
we want to add this newTodo object to the Todo collection.

But first we need collection called 'todos'

*/


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


/*


(1) rename state todo to todos
  ^: const [todo, updateTodo] = React.useState({})
  v: const [todos, updateTodos] = React.useState([])
              ^            ^                   ^^

  ^: <code><pre>{JSON.stringify(todo, null, 2)}</pre></code>
  v: <code><pre>{JSON.stringify(todos, null, 2)}</pre></code>


(2) renaming handle name:
  ^:  const handle_newTodo = newTodo => {
  v:  const handle_addTodo = newTodo => {
               ^^^

  ^: <NewTodo newTodoSubmit={handle_addTodo} />
  v: <NewTodo newTodoSubmit={handle_addTodo} />
                                 ^^^

(3) clone the array and add the newly created todo:

  const handle_addTodo = newTodo => {
    const todosCloneAndAddNewTodo = [
      ...todos,
      newTodo
    ]
    updateTodos(todosCloneAndAddNewTodo)
  }


*/
