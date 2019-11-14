
// ================================
//
//   The interator is called
//   the Reducer.
//
// ================================





const reducer = (prevState, action) =>{
  let nextState

  switch (action) {
    case 'inc':
      nextState = prevState + 1
      break
    case 'dec':
      nextState = prevState - 1
      break
    default:
      nextState = prevState
  }

  onChangeLogger(prevState, action, nextState)
  return nextState
}

const actions = ['inc', 'inc', 'inc', 'dec', 'dec', 'unknown']
const initialState = 0
const finalState = actions.reduce(reducer, initialState)

console.log(`=====> initialState: ${initialState}, finalState: ${finalState}`)


function onChangeLogger(prevState, action, nextState) {
  console.log(`prevState: ${prevState}, action: ${action},  nextState: ${nextState}`)
}
