import React from 'react'
import { connect } from 'react-redux'

import {
  mapStoreToProps,
  mapDispatchToProps
} from './selector'






// =====
//  App
// =====
const App = ({
    dispatch_increase,
    dispatch_decrease,
    count
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
      <div data-testid='count-value'>count: {count}</div>
    </div>
  )
}



const ConnectedApp = connect(
  mapStoreToProps,
  mapDispatchToProps
)(App)

export { ConnectedApp }
