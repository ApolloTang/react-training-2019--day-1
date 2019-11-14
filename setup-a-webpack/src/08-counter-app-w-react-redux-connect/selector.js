import {actionNames} from './reducer'


const mapStoreToProps = store => {
  // store = {count: 0}  //<--- the shape of store
  const count = store.count
  return {
    count
  }
}


const mapDispatchToProps = dispatch => (
  {
    dispatch_increase() { dispatch({ type: actionNames.counter_increase }) },
    dispatch_decrease() { dispatch({ type: actionNames.counter_decrease }) },
  }
)




export {
  mapStoreToProps,
  mapDispatchToProps,
}
