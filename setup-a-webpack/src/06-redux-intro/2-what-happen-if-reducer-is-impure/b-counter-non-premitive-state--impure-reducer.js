
// ===================================
//
//   This reducer is impure
//
//   The count is correct but there
//   are no change detection
//
//   and the share state is mutated
//
// ===================================



const reducer = (prevState, action) => {
  // *****************************
  //   This reucer is not pure
  // *****************************

  let nextState = prevState

  switch (action) {
    case 'inc':
      nextState.count++
    break
    case 'dec':
      nextState.count--
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
