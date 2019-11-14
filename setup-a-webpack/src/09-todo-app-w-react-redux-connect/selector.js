import { actionNames } from './reducer'

const mapStoreToProps = store => {
  // store = [{}, {}, {}, ...]
  const todos = store
  return {
    todos
  }
}


const mapDispatchToProps = dispatch => (
  {
    dispatch_addTodo(newTodo) { dispatch( { type: actionNames.todos_add,    payload: {newTodo} } ) },
    dispatch_deleteTodo(id)   { dispatch( { type: actionNames.todos_delete, payload: {id}      } ) },
    dispatch_toggleTodo(id)   { dispatch( { type: actionNames.todos_toggle, payload: {id}      } ) }
  }
)



export {
  mapStoreToProps,
  mapDispatchToProps
}
