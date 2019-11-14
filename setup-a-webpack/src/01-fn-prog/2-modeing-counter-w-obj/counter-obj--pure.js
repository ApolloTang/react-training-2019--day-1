
const updateCounter = (counter, change) => {
  // This function does not
  // mutate the values on
  // object properties passed in.
  //
  // it makes a copy
  //
  // *** This is a PURE FUNCTION ***

  const nextCounter = {
    ...counter,
    count: counter.count + change
  }
  return nextCounter
}

export {
 updateCounter
}


/*

  Pure function:
  -----------------------------
    - does not create side effect
    - does not mess up your share state
    - you have change detection

*/

/*

  ES7 Object spread
  ===================

  https://github.com/tc39/proposal-object-rest-spread/blob/master/Spread.md


  Gotcha
  ======
  Object spread only do shallow spread so
  {...obj} only clone one level, to deeply clone an objects use:

    const deepCloned = _.cloneDeep(myObj)

  https://lodash.com/docs/4.17.15#cloneDeep

*/

