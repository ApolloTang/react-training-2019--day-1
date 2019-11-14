import {actions} from './action'
import uniqueId from 'lodash/uniqueId'


const mapStoreToProps = store => {
  // store = [{}, {}, {}, ...]
  const todos = store
  return {
    todos
  }
}


const makeNewTodo = todoText => ({
  id: uniqueId(),
  text: todoText,
  timeStamp: Date.now(),
  completed: false
})



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
