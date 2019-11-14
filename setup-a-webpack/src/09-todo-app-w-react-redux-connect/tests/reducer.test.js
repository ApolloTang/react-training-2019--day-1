import { initialState, reducer, actionNames } from '../reducer'



describe('Todo reducer', ()=>{
  it('Should return the initail state', ()=>{
    const nonTodosAction = {}
    expect(reducer(undefined, nonTodosAction)).toEqual(initialState)
  })

  it('Can add new todo', ()=>{
    const newTodo = {id: 'newID', timeStamp:12345, text:'learn react', completed:false}
    const prevState = []
    const nextState = [ newTodo ]
    expect(
      reducer(
        prevState,
        { type: actionNames.todos_add, payload: {newTodo} }
      )
    ).toEqual(nextState)
  })

  it('Can delete todo', ()=>{
    const idToDelete = 'idToDelete'
    const prevState = [
      {id: idToDelete, timeStamp:12345, text:'learn react', completed:false}
    ]
    const nextState = []
    expect(
      reducer(
        prevState,
        { type: actionNames.todos_delete, payload: {id: idToDelete} }
      )
    ).toEqual(nextState)
  })

  it('Can toggle todo', ()=>{
    const idToToggle = 'idToToggle'
    const prevState = [
      {id: idToToggle, timeStamp:12345, text:'learn react', completed:false}
    ]
    const nextState = [
      {id: idToToggle, timeStamp:12345, text:'learn react', completed:true}
    ]
    expect(
      reducer(
        prevState,
        { type: actionNames.todos_toggle, payload: {id:idToToggle} }
      )
    ).toEqual(nextState)
  })
})




