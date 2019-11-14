import React from 'react'
import uniqueId from 'lodash/uniqueId'


const makeNewTodo = todoText => ({
  id: uniqueId(),
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
      <form onSubmit={handle_newTodoSubmit} data-testid="new-todo-form">
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

export {
  NewTodo,
  makeNewTodo
}
