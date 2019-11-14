import deepFreeze from 'deep-freeze'

import {
  updateCounter,
}  from './counter-obj--pure'
// }  from './counter-obj--impure'


describe('[Modeling counter with object]', ()=>{
  describe('[Counter update operation]', ()=>{
    let counter

    beforeEach(()=>{
      counter = { count:0 }
    })

    it('can increase counter', ()=>{
      const change = +1
      const counterNext = updateCounter(counter, change)
      expect(counterNext).toEqual({ count:1 })
    })

    it('can decrease counter', ()=>{
      const change = -1
      const counterNext = updateCounter(counter, change)
      expect(counterNext).toEqual({ count:-1 })
    })
  })


  describe('[change detection (identity test)]', ()=>{
    let counterPrev

    beforeEach(()=>{
      counterPrev = { count:0 }
    })

    it('can increase counter', ()=>{
      const change = +1
      const counterNext = updateCounter(counterPrev, change)
      expect(counterNext).not.toBe(counterPrev)
    })

    it('can decrease counter', ()=>{
      const change = -1
      const counterNext = updateCounter(counterPrev, change)
      expect(counterNext).not.toBe(counterPrev)
    })
  })


  describe('[mutation test]', ()=>{
    let counter

    beforeEach(()=>{
      counter = { count:0 }

      deepFreeze(counter)        // <---- deepFreeze
    })

    it('can increase counter', ()=>{
      const change = +1
      const counterNext = updateCounter(counter, change)
      expect(counterNext).toEqual({ count:1 })
    })

    it('can decrease counter', ()=>{
      const change = -1
      const counterNext = updateCounter(counter, change)
      expect(counterNext).toEqual({ count:-1 })
    })
  })
})



/*

  jest matcher toEqual()
  ======================
    - Check the value of an object.
    - Recursively checks every field of an object or array.

  https://jestjs.io/docs/en/using-matchers#common-matchers

*/

