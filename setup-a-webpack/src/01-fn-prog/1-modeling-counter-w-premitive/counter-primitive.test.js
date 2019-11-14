import {
  updateCounter,
}  from './counter-primitive'




describe('[Modeling counter with object]', ()=>{
  describe('[Counter update operation]', ()=>{
    let counter

    beforeEach(()=>{
      counter = 0
    })

    it('can increase counter', ()=>{
      const change = +1
      const counterNext = updateCounter(counter, change)
      expect(counterNext).toBe(1)
    })

    it('can decrease counter', ()=>{
      const change = -1
      const counterNext = updateCounter(counter, change)
      expect(counterNext).toBe(-1)
    })
  })

  // Change detection simply answer the question:
  //
  //    "did the counter state change?"
  //
  // note:
  //   change = 0 is not a change by definition,
  //   so we will not test this special case.
  //
  describe('[change detection (identity test)]', ()=>{
    let counterPrev

    beforeEach(()=>{
      counterPrev = 0
    })

    it('increase counter', ()=>{
      const change = +1
      const counterNext = updateCounter(counterPrev, change)
      expect(counterNext).not.toBe(counterPrev)
    })

    it('decrease counter', ()=>{
      const change = -1
      const counterNext = updateCounter(counterPrev, change)
      expect(counterNext).not.toBe(counterPrev)
    })
  })
})



/*

  jest matcher toBe()
  ===================
    Comparison using Object.is.

  https://jestjs.io/docs/en/using-matchers#common-matchers

  Object.is
  =========
    Object.is is similar to strict equality operator '===',
    but it is well behave on edge case:

    For '===' the following is confusing:

      (-0 === +0)   --> true
      (NaN === NaN) --> false

    For Object.is the following give expected results:

      Object.is(-0, +0) --> false
      Object.is(NaN, NaN) --> true

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

*/
