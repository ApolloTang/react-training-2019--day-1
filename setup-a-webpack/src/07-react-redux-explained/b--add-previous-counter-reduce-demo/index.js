import React from 'react'
import ReactDOM from 'react-dom'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)





const App = () => (
  <div>(b) open console to see demo</div>
)


// =====================================
ReactDOM.render(
  <App />,
  document.getElementById('app')
)


// *********************************************************************************
// from:
// 06-redux-intro/1-how-redux-get-its-name/d-the-iterator-is-called-the-reducer.js
// *********************************************************************************


// Reducer
// ========
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

  console.log(`action:    ${action}`)
  logger(initialState)(nextState)

  return nextState
}


const actions = [
  'inc', 'inc', 'inc',
  'dec', 'dec', 'unknown'
]

const initialState = 0
const finalState = actions.reduce(reducer, initialState)

console.log(`=====> initialState: ${initialState}, finalState: ${finalState}`)




// Utility
// ========
function logger (initialState) {
  return nextState => {
    if (logger.prev) {
      console.log(`prevState: ${JSON.stringify(logger.prev)}`)
    } else {
      console.log(`prevState: ${JSON.stringify(initialState)}`)
    }
    logger.prev = nextState
    console.log(`nextState: ${JSON.stringify(nextState)}`)
    console.log('=====================')
  }
}
