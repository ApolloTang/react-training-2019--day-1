import fakeConfigureStore from 'redux-mock-store'
// A library to test the action-related logic, not the reducer-related
// one. In other words, it does not update the Redux store.

import {
  mapStoreToProps,
  mapDispatchToProps
} from  '../selector'

import { actions, actionNames } from '../action'



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

    const newTodo = {
      id: 'newID', 
      text:'learn React', 
      timeStamp:'12345', 
      completed:false
    }
    
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




describe('[Selector, mapDipatchToProps (integration test on action creator)]', ()=>{
  const fakeCreateStore = fakeConfigureStore([/* fake middleware */])

  const initialState = []  // todos model initial state
  const fakeStore = fakeCreateStore(initialState)

  const fakeDispatch = fakeStore.dispatch

  const {
    dispatch_addTodo,
    dispatch_deleteTodo,
    dispatch_toggleTodo,
  } = mapDispatchToProps(fakeDispatch)

  describe('dispatch_addTodo() can dispatch action creator: actions.todos_add()', () => {
    const newTodo = {
      id: 'newID',
      timeStamp:'12345',
      text:'learn React',
      completed:false
    }

    it('actions.todos_add() has been called with correct arugment', () => {
      const spy = jest.spyOn(actions, 'todos_add')

      dispatch_addTodo(newTodo)

      const called_arguments = spy.mock.calls[0][0]
      expect(called_arguments).toEqual(newTodo)

      spy.mockRestore()
    })

    it('actions.todos_add() returns correct action', () => {
      const spy = jest.spyOn(actions, 'todos_add')

      dispatch_addTodo(newTodo)

      const called_result = spy.mock.results[0]
      expect(called_result.value).toEqual({
        type: actionNames.todos_add,
        payload: {newTodo}
      })

      spy.mockRestore()
    })
  })

  describe('dispatch_deleteTodo() can dispatch action creator: actions.todos_delete()', () => {
    const someId = 'someId'

    it('actions.todos_delete() has been called with correct arugment', () => {
      const spy = jest.spyOn(actions, 'todos_delete')

      dispatch_deleteTodo(someId)

      const called_deleteId = spy.mock.calls[0][0]
      expect(called_deleteId).toBe(someId)

      spy.mockRestore()
    })

    it('actions.todos_delete() returns correct action', () => {
      const spy = jest.spyOn(actions, 'todos_delete')

      dispatch_deleteTodo(someId)

      const called_result = spy.mock.results[0]
      expect(called_result.value).toEqual({
        type: actionNames.todos_delete,
        payload: {id:someId}
      })

      spy.mockRestore()
    })
  })

  describe('dispatch_toggleTodo() can dispatch action creator: action.todo_toggle()', () => {
    const someId = 'someId'

    it('action.todo_toggle() has been called with correct arugment', () => {
      const spy = jest.spyOn(actions, 'todos_toggle')

      dispatch_toggleTodo(someId)

      const called_deleteId = spy.mock.calls[0][0]
      expect(called_deleteId).toBe(someId)

      spy.mockRestore()
    })

    it('action.todo_toggle() returns correct action', () => {
      const spy = jest.spyOn(actions, 'todos_toggle')

      dispatch_toggleTodo(someId)

      const called_result = spy.mock.results[0]
      expect(called_result.value).toEqual({
        type: actionNames.todos_toggle,
        payload: {id:someId}
      })

      spy.mockRestore()
    })
  })
})

