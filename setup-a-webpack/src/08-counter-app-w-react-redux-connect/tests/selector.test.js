import fakeConfigureStore from 'redux-mock-store'
// A library to test the action-related logic, not the reducer-related
// one. In other words, it does not update the Redux store.

import {
  mapStoreToProps,
  mapDispatchToProps
} from  '../selector'

import { actionNames } from '../reducer'


describe('[Selector, mapStoreToProps]', ()=>{
  const fakeStore = {count: 0}

  it('Should map store.count to count: ', () => {
    expect(mapStoreToProps(fakeStore)).toEqual({count:fakeStore.count})
  })
})



describe('[Selector, mapDispatchToProps]', ()=>{
  const fakeCreateStore = fakeConfigureStore([/* fake middleware */])
  const initialState = {count: 0}  // counter model initial state

  it('dispatch_increase() and store receive correct action', () => {
    const fakeStore = fakeCreateStore(initialState)
    const fakeDispatch = fakeStore.dispatch
    const { dispatch_increase } = mapDispatchToProps(fakeDispatch)
    dispatch_increase()
    expect(fakeStore.getActions()).toEqual([{ type: actionNames.counter_increase }])
  })

  it('dispatch_decrease() and store receive correct action', () => {
    const fakeStore = fakeCreateStore(initialState)
    const fakeDispatch = fakeStore.dispatch
    const { dispatch_decrease } = mapDispatchToProps(fakeDispatch)
    dispatch_decrease()
    expect(fakeStore.getActions()).toEqual([{ type: actionNames.counter_decrease }])
  })

})
