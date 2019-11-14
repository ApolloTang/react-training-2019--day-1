const reactContainer = document.getElementById('react-container')



const makeNewTodo = todoText => ({
  id: _.uniqueId(),
  text: todoText,
  timeStamp: Date.now(),
  completed: false
})



// ======================
//   New Todo component
// ======================
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



// ======================
//   TodoItem component
// ======================
const TodoItem = ({todo}) => (
   <div>
     <code><pre>
       {JSON.stringify(todo)}
     </pre></code>
   </div>
)



// ===========
//   Todo App
// ===========
const MyApp = () => {
  const [todos, updateTodos] = React.useState([])

  const handle_addTodo = newTodo => {
    const todosCloneAndAddNewTodo = [
      ...todos,
      newTodo
    ]
    updateTodos(todosCloneAndAddNewTodo)
  }

  return(
    <div>
     <NewTodo newTodoSubmit={handle_addTodo} />
     <code><pre>{JSON.stringify(todos, null, 2)}</pre></code>
     <div>
       {
         todos.map( todo => {
           return (
             <TodoItem
               key={todo.id}
               todo={todo}
             />
           )
         })
       }
     </div>
    </div>
  )
}


ReactDOM.render(<MyApp />, reactContainer)



/*

const TodoItem = ({todo, deleteTodo}) => (
                         ^^^^^^^^^^
  ...
     <button onClick={deleteTodo} >X</button>
                      ^^^^^^^^^^
  ...
)


             <TodoItem
               key={todo.id}
               todo={todo}
               deleteTodo={handle_deleteTodo}
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
             />




  const handle_deleteTodo = id => {
    console.log('delete', id) // <--- how to get id ? we got syntatic event here
  }

*/
