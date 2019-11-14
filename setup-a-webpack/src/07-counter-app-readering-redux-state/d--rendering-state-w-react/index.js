import React from 'react'
import ReactDOM from 'react-dom'

const container = document.createElement('div')

container.id = 'app'
document.body.appendChild(container)

/* *********************************************************************************

yarn dev src/07-counter-app-readering-redux-state/d--rendering-state-w-react

********************************************************************************** */



// App
// ====
const App = ({state}) => (
  <div>{state}</div>
)

// Renderer
// =========
const render = (state) => {
  ReactDOM.render(
    <App state={state}/>,
    document.getElementById('app')
  )
}





// Reducer
// ========
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
// =============
const store = createStore(reducer)






// Store subscription
// ==================
store.subscribe(function listener(){
  const nextState = store.getState()
  logger(initialState)(nextState)

  render(nextState)  // <------ @@ push state into vertual dom @@
})




// Actions
// =======
const actions = [
  {type:'inc'}, {type:'inc'}, {type:'inc'},
  {type:'dec'}, {type:'dec'}, {type:'unknown',}
]

// Dispatch actions
// ================
actions.forEach(action=>{
  // debugger   // <------------@@ uncomment this to see steps @@

  console.log(`action:    ${JSON.stringify(action)}`)
  store.dispatch(action)
})

const finalState = store.getState()

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


