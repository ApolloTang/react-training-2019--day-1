import { initialState, reducer } from './reducer'

// *******************************************
// Reducer is one of the easiest thing to test
// *******************************************

describe('Todo reducer', ()=>{
  it('Should return the initail state', ()=>{
    const nonTodosAction = {}
    expect(reducer(undefined, nonTodosAction)).toEqual(initialState)
  })


  it('Can add new todo', ()=>{
    const newTodo = {id:1, text:'learn react', completed:false}

    const prevState = []
    const nextState = [ newTodo ]
    const action = {type:'addTodo',    payload:{newTodo} }

    expect( reducer(prevState, action) ).toEqual(nextState)
  })


  it('Can delete todo', ()=>{
    const idToDelete = 1

    const prevState = [
      {id: idToDelete, timeStamp:12345, text:'learn react', completed:false}
    ]
    const nextState = []
    const action = {type:'removeTodo', payload:{ id:1 } }

    expect( reducer(prevState, action) ).toEqual(nextState)
  })
})




