
// ===========================================
//
//   A very simple redux store from scratch
//
// ===========================================



// This is a very simply redux store
function createStore(reducer) {
  let state // state is undefined initially
  let listener

  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    listener && listener()
  }

  const subscribe = _listener => {
    listener = _listener
    return () => { listener = undefined }
  }

  // To initialized the store with initial state, we dispatch
  // an empty action. This will call reducer with:
  //
  //   reducer(undefined, {/* empty action */})
  //
  dispatch({/* empty action */})

  return {
    getState,
    dispatch,
    subscribe
  }
}


const initialState = []

// When reducer is called with:
//
//   reducer(undefined, {/* empty action */})
//
// it is initialized to initial state.
//                         vvvvvvvvvvvv
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


const store = createStore(reducer)

store.subscribe(function listener(){
  const nextState = store.getState()
  logger(initialState)(nextState)
})



// Actions to dispatch
const actions = [
  {type:'addTodo',    payload:{ newTodo:{id:1, text:'learn react', completed:false}} },
  {type:'addTodo',    payload:{ newTodo:{id:2, text:'buy milk', completed:false}} },
  {type:'removeTodo', payload:{ id:1 } },
  {type:'unknown',    payload:{ someUnknownPropertyName:'someUnknownPropertyValue'} },
]

actions.forEach(action=>{
  console.log(`action:    ${JSON.stringify(action)}`)
  store.dispatch(action)
})

const finalState = store.getState()

console.log(`=====> initialState: ${JSON.stringify(initialState)}`)
console.log(`=====> finalState: ${JSON.stringify(finalState)}`)






// Utility =======================================
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

