
// ===================================
//
//   Our state is now a
//   non primitive object
//
// ===================================



const reducer = (prevState, action) => {
  let nextState

  switch (action) {
    case 'inc':
      nextState = {
        ...prevState,
        count: prevState.count + 1
      }
    break
    case 'dec':
      nextState = {
        ...prevState,
        count: prevState.count - 1
      }
    break
    default:
      nextState = prevState
  }

  onChangeLogger(prevState, action, nextState)

  return nextState
}


const actions = ['inc', 'inc', 'dec', 'unknown']
const initialState = {count:0}
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
