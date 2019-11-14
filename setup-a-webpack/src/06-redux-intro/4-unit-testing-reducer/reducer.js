
const initialState = []

const reducer = (prevState=initialState, action)=>{
  let nextState
  const type = action.type
  const payload = action.payload

  switch (type) {
    case 'addTodo': {
      const newTodo = payload.newTodo
      nextState = [
        ...prevState,
        newTodo
      ]
    }
    break
    case 'removeTodo': {
      const idToRemove = payload.id
      nextState = prevState.filter( todo=>(todo.id!==idToRemove) )
    }
    break
    default: // unknown action
      nextState = prevState
  }

  return nextState
}

export {
  initialState,
  reducer
}



