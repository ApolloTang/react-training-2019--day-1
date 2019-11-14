
const updateCounter = (counter, change) => {
  // This function is impure
  // because it mutate the values on
  // object properties passed in.

  counter.count = counter.count + change
  return counter
}

export {
 updateCounter
}

/*

  Problem with impure function:
  -----------------------------
    - it create side effect
    - it mess up your share state
    - you cannot keep track of changes

*/

