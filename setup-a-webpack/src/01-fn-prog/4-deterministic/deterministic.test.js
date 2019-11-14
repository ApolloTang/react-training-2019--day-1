import {
  foo,
}  from './deterministic'
// }  from './non-deterministic'


it ('foo should be deterministic', ()=>{
  const result1 =foo('a')
  const result2 =foo('a')
  expect(result1).toBe(result2)

  const result3 =foo('b')
  const result4 =foo('b')
  expect(result3).toBe(result4)
})


