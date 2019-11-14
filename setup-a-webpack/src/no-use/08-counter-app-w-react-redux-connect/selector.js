import {actions} from './action'


const mapStoreToProps = store => {
  // store = {count: 0}
  const count = store.count
  return {
    count
  }
}


const mapDispatchToProps = dispatch => (
  {
    dispatch_increase() { dispatch(actions.counter_increase()) },
    dispatch_decrease() { dispatch(actions.counter_decrease()) },
  }
)




export {
  mapStoreToProps,
  mapDispatchToProps
}
