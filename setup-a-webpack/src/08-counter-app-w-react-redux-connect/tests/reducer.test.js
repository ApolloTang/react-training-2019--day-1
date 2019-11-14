import { initialState, reducer, actionNames } from '../reducer'


describe('Counter reducer', ()=>{
  it('Should return the initial state', ()=>{
    const nonCounterAction = {}
    expect(reducer(undefined, nonCounterAction)).toEqual(initialState)
  })

  it('Should increase counter', ()=>{
    expect(
      reducer( {count:1}, { type: actionNames.counter_increase } )
    ).toEqual( {count:2} )
  })

  it('Should decrease counter', ()=>{
    expect(
      reducer( {count:1}, { type: actionNames.counter_decrease } )
    ).toEqual( {count:0} )
  })
})



