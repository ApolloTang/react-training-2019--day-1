
// ======================================
//
//   Calculate todo list state
//   with impure a reducer
//
//   The state is correct but there
//   are no change detection
//
//   and the share state is mutated
//
// ======================================



const reducer = (prevState, action) => {
  // *****************************
  //   This reucer is not pure
  // *****************************

  let nextState = prevState
  const type = action.type
  const payload = action.payload

  switch (type) {
    case 'addTodo': {
      const newTodo = payload.newTodo
      nextState.push(newTodo)
    }
    break
    case 'removeTodo': {
      const id = payload.id
      const indexToRemove = nextState.findIndex(todo=>todo.id === id)
      nextState.splice(indexToRemove, 1)
    }
    break
    default: // unknown actionefault:
      nextState = prevState
  }

  onChangeLogger(prevState, action, nextState)

  return nextState
}






const actions = [
  {type:'addTodo',    payload:{ newTodo:{id:1, text:'learn react', completed:false}} },
  {type:'addTodo',    payload:{ newTodo:{id:2, text:'buy milk', completed:false}} },
  {type:'removeTodo', payload:{ id:1 } },
  {type:'unknown',    payload:{ someUnknownPropertyName:'someUnknownPropertyValue'} },
]
const initialState = []
const finalState = actions.reduce( reducer, initialState )

console.log('---------')
console.log(`=====> initialState: ${JSON.stringify(initialState)}`)
console.log(`=====> finalState: ${JSON.stringify(finalState)}`)




function onChangeLogger(prevState, action, nextState) {
  console.log('=====================')
  console.log(`prevState: ${JSON.stringify(prevState)}`)
  console.log(`action:    ${JSON.stringify(action)}`)
  console.log(`nextState: ${JSON.stringify(nextState)}`)
  console.log(`changed: ${nextState !== prevState}`)
}
