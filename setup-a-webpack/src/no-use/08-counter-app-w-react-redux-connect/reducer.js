import {
  actionNames
} from './action'


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
  initialState,
  reducer
}

