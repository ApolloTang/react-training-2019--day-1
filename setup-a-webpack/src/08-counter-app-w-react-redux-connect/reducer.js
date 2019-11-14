const actionNames = {
  // if you have a typo with action name, it will
  // fail silently, that is why we call action name by
  // variable; If we have a typo with variable we will get an
  // "Uncaught RefferenceError"
  counter_increase: 'counter_increase',
  counter_decrease: 'counter_decrease'
}

const initialState = {count:0}

function reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actionNames.counter_increase:
      return {
        ...state,
        count: state.count + 1
      }
    case actionNames.counter_decrease:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export {
  actionNames,
  initialState,
  reducer
}

