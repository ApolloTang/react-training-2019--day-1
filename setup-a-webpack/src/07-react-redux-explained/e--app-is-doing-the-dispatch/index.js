import React from 'react'
import ReactDOM from 'react-dom'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)




// App <-- app now has control
// ====
const App = ({
    dispatch_increase,
    dispatch_decrease,
    state
}) => {
  const handle_increase = () => {
    dispatch_increase()
  }

  const handle_decrease = () => {
    dispatch_decrease()
  }
  return (
    <div>
      <button onClick={handle_increase}>+</button>
      <button onClick={handle_decrease}>-</button>
      <div>{state}</div>
    </div>
  )
}



// Reducer
// =======
import {createStore} from 'redux'
const initialState = 0
const reducer = (prevState=initialState, action) =>{
  let nextState
  switch (action.type) {
    case 'inc':
      nextState = prevState + 1
      break
    case 'dec':
      nextState = prevState - 1
      break
    default:
      nextState = prevState
  }
  return nextState
}



// Create store
// ============
const store = createStore(reducer)



// update store
// ============
const dispatch_increase = () => {
  const action = {type:'inc'}
  console.log(`action:    ${JSON.stringify(action)}`)
  store.dispatch(action)
}

const dispatch_decrease = () => {
  const action = {type:'dec'}
  console.log(`action:    ${JSON.stringify(action)}`)
  store.dispatch(action)
}



// Renderer
// ========
const render = (state) => {
  ReactDOM.render(
    <App
      dispatch_increase={dispatch_increase}
      dispatch_decrease={dispatch_decrease}
      state={state}
    />,
    document.getElementById('app')
  )
}



// Store subscription
// ==================
store.subscribe(function listener(){
  const nextState = store.getState()
  logger(initialState)(nextState)

  render(nextState)  // <------ @@ push state into virtual dom @@
})



// Initial render, with initial state
// ==================================
render(store.getState())





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









