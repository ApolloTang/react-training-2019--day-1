import fakeConfigureStore from 'redux-mock-store'
// A library to test the action-related logic, not the reducer-related
// one. In other words, it does not update the Redux store.

import {
  mapStoreToProps,
  mapDispatchToProps
} from  '../selector'

import { actionNames } from '../reducer'



describe('[Selector, mapStoreToProps]', ()=>{
  const fakeStore = []

  it('Should map store to todos property: ', () => {
    expect(mapStoreToProps(fakeStore)).toEqual({todos:fakeStore})
  })
})



describe('[Selector, mapDispatchToProps]', ()=>{
  const fakeCreateStore = fakeConfigureStore([/* fake middleware */])

  const initialState = []  // todos model initial state

  it('dispatch_addTodo() and store receive correct action', () => {
    const fakeStore = fakeCreateStore(initialState)
    const fakeDispatch = fakeStore.dispatch
    const { dispatch_addTodo } = mapDispatchToProps(fakeDispatch)

    const newTodo = {id: 'newID', timeStamp:'12345', text:'learn React', completed:false}
    dispatch_addTodo(newTodo)
    expect(fakeStore.getActions()).toEqual([
      {
        type: actionNames.todos_add,
        payload: {newTodo},
      }
    ])
  })


  it('dispatch_deleteTodo() and store receive correct action', () => {
    const fakeStore = fakeCreateStore(initialState)
    const fakeDispatch = fakeStore.dispatch
    const { dispatch_deleteTodo } = mapDispatchToProps(fakeDispatch)

    const someId = 'someId'
    dispatch_deleteTodo(someId)
    expect(fakeStore.getActions()).toEqual([
      {
        type: actionNames.todos_delete,
        payload: {id: someId}
      },
    ])
  })


  it('dispatch_toggleTodo() and store receive correct action', () => {
    const fakeStore = fakeCreateStore(initialState)
    const fakeDispatch = fakeStore.dispatch
    const { dispatch_toggleTodo } = mapDispatchToProps(fakeDispatch)

    const someId = 'someId'
    dispatch_toggleTodo(someId)
    expect(fakeStore.getActions()).toEqual( [
      {
        type: actionNames.todos_toggle,
        payload: {id: someId}
      }
    ])
  })
})

