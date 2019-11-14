import fakeConfigureStore from 'redux-mock-store'
// A library to test the action-related logic, not the reducer-related
// one. In other words, it does not update the Redux store.

import {
  mapStoreToProps,
  mapDispatchToProps
} from  '../selector'

import {
  actions,
  actionNames
} from '../action'



describe('[Selector, mapStoreToProps]', ()=>{
  const fakeStore = {count: 0}

  it('Should map store.count to count: ', () => {
    expect(mapStoreToProps(fakeStore)).toEqual({count:fakeStore.count})
  })
})



describe('[Selector, mapDispatchToProps]', ()=>{
  const fakeCreateStore = fakeConfigureStore([/* fake middleware */])

  const initialState = {count: 0}  // counter model initial state
  const fakeStore = fakeCreateStore(initialState)

  const fakeDispatch = fakeStore.dispatch

  const {
    dispatch_increase,
    dispatch_decrease
  } = mapDispatchToProps(fakeDispatch)


  describe('dispatch_increase', () => {
    it('return correct action', () => {
      const spy = jest.spyOn(actions, 'counter_increase')

      dispatch_increase()

      const called_result = spy.mock.results[0]
      expect(called_result.value).toEqual({
        type: actionNames.counter_increase
      })

      spy.mockRestore()
    })
  })

  describe('dispatch_decrease', () => {
    it('return correct action', () => {
      const spy = jest.spyOn(actions, 'counter_decrease')

      dispatch_decrease()

      const called_result = spy.mock.results[0]
      expect(called_result.value).toEqual({
        type: actionNames.counter_decrease
      })

      spy.mockRestore()
    })
  })


})
