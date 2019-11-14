/*
 ==========================================
 The following operation method are pure
 they do not mutate the array passed in
 ==========================================
*/


const addTodo = (todos, newTodo) => {
  const todosCloneAndAddNewTodo = [
    ...todos,
    newTodo
  ]
  return todosCloneAndAddNewTodo
}

const deleteTodo = (todos, id) => {
  const todosCloneAndItemDeleted = todos.filter(
    todo => todo.id!==id
  )
  return todosCloneAndItemDeleted
}


const toggleTodo = (todos, id) => {
  const todosCloneAndToggled = todos.map(todo =>
    (todo.id === id) ? { ...todo, completed: !todo.completed } : todo
  )
  return todosCloneAndToggled
}

export {
  addTodo,
  deleteTodo,
  toggleTodo
}


/*

  copy array with spread operator
  ===============================
  https://www.geeksforgeeks.org/javascript-spread-operator/



  Gotcha
  ======
  copy array with spread operator only clone one level, it is shallow.
  To deeply clone an array, you can use:

    const deepCloned = _.cloneDeep(myArray)

  https://lodash.com/docs/4.17.15#cloneDeep




  When do operation on array use the non mutation methods to
  keep your function pure, here are a handful of example:
  ===============================================================

  return a new array
  ------------------
  concat      : join the array with other array(s) or value(s)
  from        : create a new, shallow-copied Array instance from an array-like or iterable
  slice       : extract a section of array

  return a value
  --------------
  join        : join all elements of the array into a string
  indexOf     : find the index of the 1st occurrence of a value
  lastIndexOf : find the index of the last occurrence of a value


  Iteration methods
  -----------------
  filter : create a new array with only the elements for which a predicate is true.
  map    : create a new array whose elements are values transformed by a function

*/

