import React from 'react'

import { TodoItem } from './components/todo-item'
import { NewTodo } from './components/new-todo'

// =====
//  App
// =====
const TodoApp = () => {
  const [todos, updateTodos] = React.useState([])


  const handle_addTodo = newTodo => {
    const todosCloneAndAddNewTodo = [
      ...todos,
      newTodo
    ]
    updateTodos(todosCloneAndAddNewTodo)
  }

  const handle_delete = id => () => {
    const todosCloneAndItemDeleted = todos.filter(
      todo => todo.id!==id
    )
    updateTodos(todosCloneAndItemDeleted)
  }

  const handle_toggle = id => () => {
    const todosCloneAndToggled = todos.map(todo =>
      (todo.id === id) ? { ...todo, completed: !todo.completed } : todo
    )
    updateTodos(todosCloneAndToggled)
  }

  return (
    <div>
      <NewTodo newTodoSubmit={handle_addTodo} />
      <pre><code> {JSON.stringify(todos, null, 2)} </code></pre>
      <div data-testid="todo-list">
        {
          todos.map(
            todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={handle_delete(todo.id)}
                toggleTodo={handle_toggle(todo.id)}
              />
            )
          )
        }
      </div>
    </div>
  )
}


export { TodoApp }
