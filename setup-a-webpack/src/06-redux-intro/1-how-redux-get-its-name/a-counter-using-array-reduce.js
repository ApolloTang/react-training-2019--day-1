
// =================================
//
//   Why redux is called "redux" ?
//
//   It is named after "reduce"
//
// =================================


const actions = [1,1,1,-1,-1]

const initialState = 0

const finalState = actions.reduce((prevState, action)=>{
  const nextState = prevState + action
  onChangeLogger(prevState, action, nextState)
  return nextState
}, initialState)


console.log(`initialState: ${initialState}, finalState: ${finalState}`)


function onChangeLogger(prevState, action, nextState) {
  console.log(`prevState: ${prevState}, action: ${action},  nextState: ${nextState}`)
}
