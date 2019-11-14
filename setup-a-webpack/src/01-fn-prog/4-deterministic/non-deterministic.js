/*
 ==========================
 foo() is non deterministic
 ==========================
*/

const foo = x => x+Math.random()

export {
  foo
}


/*
 ---------------------------------
 for a function to be pure it has
 to be deterministric
 ---------------------------------

 - no random number generator
 - no http call
 - no timestamp
 - no reading user interaction
*/
