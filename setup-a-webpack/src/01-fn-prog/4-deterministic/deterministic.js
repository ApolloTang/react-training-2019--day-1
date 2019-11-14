/*
 ======================
 foo() is deterministic
 ======================

 deterministic, is a feature of pure function
 it alway return the same thing if the input were
 the same.

 no surprises !!
*/


const foo = (x) => {
  if (foo.cache[x] !== undefined ) {
    // use cached
    return foo.cache[x]
  } else {
    // calculate new
    return foo.cache[x] = x+Math.random()
  }
}
foo.cache = {}

export {
  foo
}


