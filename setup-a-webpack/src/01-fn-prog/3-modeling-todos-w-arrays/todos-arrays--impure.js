/*
 ==========================================
 The following operation method are impure
 they mutate the array passed in
 ==========================================
*/


const addTodo = (todos, newTodo) => {
  todos.push(newTodo)
  return todos
}


const deleteTodo = (todos, id) => {
  let indexToDelete
  todos.forEach((todo, index) => {
    if (todo.id === id) indexToDelete = index
  })
  todos.splice(indexToDelete, 1)
  return todos
}


const toggleTodo = (todos, id) => {
  let indexToToggle
  todos.forEach((todo, index) => {
    if (todo.id === id)  indexToToggle = index
  })
  todos[indexToToggle]['completed'] = !todos[indexToToggle].completed
  return todos
}


export {
  addTodo,
  deleteTodo,
  toggleTodo
}


/*

  When do operation on array watch out for these mutation methods
  ===============================================================

  pop     : remove the last element
  shift   : remove the first element
  push    : add one or more elements to the end
  unshift : add one or more elements to the front
  reverse : reverse the order
  sort    : sort the elements
  splice  : add, replace, or remove elements (with great granularity)

*/

