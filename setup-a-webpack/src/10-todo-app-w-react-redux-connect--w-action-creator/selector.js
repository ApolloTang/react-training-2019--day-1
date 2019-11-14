import {actions} from './action'


const mapStoreToProps = store => {
  // store = [{}, {}, {}, ...]
  const todos = store
  return {
    todos
  }
}


const mapDispatchToProps = dispatch => (
  {
    dispatch_addTodo(newTodo) { dispatch( actions.todos_add(newTodo) ) },
    dispatch_deleteTodo(id)   { dispatch( actions.todos_delete(id)   ) },
    dispatch_toggleTodo(id)   { dispatch( actions.todos_toggle(id)   ) }
  }
)



export {
  mapStoreToProps,
  mapDispatchToProps
}
