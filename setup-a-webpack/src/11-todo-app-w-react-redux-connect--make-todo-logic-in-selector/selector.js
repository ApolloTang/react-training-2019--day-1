import { actions } from './action'
import { makeNewTodo } from './model'



const mapStoreToProps = store => {
  // store = [{}, {}, {}, ...]
  const todos = store
  return { todos }
}



const mapDispatchToProps = dispatch => (
  {
    dispatch_addTodo(newTodoText) {
      const newTodo = makeNewTodo(newTodoText)
      dispatch(actions.todos_add(newTodo) )
    },
    dispatch_deleteTodo(id)   { dispatch( actions.todos_delete(id)   ) },
    dispatch_toggleTodo(id)   { dispatch( actions.todos_toggle(id)   ) }
  }
)



export {
  mapStoreToProps,
  mapDispatchToProps,
  makeNewTodo
}
