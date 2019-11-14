
// ================================
//
//   Dealing with unknown action
//
// ================================




const actions = ['inc', 'inc', 'inc', 'dec', 'dec', 'unknown']
//                                                  ^^^^^^^^^^
//

const initialState = 0

const finalState = actions.reduce((prevState, action)=>{
  let nextState

  switch (action) {
    case 'inc':
      nextState = prevState + 1
      break
    case 'dec':
      nextState = prevState - 1
      break
    default:
      // ----------------------------------------
      // If the action is unknown we do nothing.
      // Meaning ---> we don't change the state
      // ----------------------------------------
      nextState = prevState
  }

  onChangeLogger(prevState, action, nextState)

  return nextState
}, initialState)



console.log(`=====> initialState: ${initialState}, finalState: ${finalState}`)




function onChangeLogger(prevState, action, nextState) {
  console.log(`prevState: ${prevState}, action: ${action},  nextState: ${nextState}`)
}
