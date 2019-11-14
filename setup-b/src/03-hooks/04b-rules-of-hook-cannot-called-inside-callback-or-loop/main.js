const reactContainer = document.getElementById('react-container')



// ==============================
// Rules of hook:
// Cannot be called in a callback
//
// example (1):
// callback in the
// return of component
// ==============================

// [eslint react-hooks/rules-of-hooks]
// React Hook "React.useState" cannot be called inside a callback.
// React Hooks must be called in a React function component or
// a custom React Hook function.
const MyAppTry1 = () => {
  const stuff = [1,2,3]

  return(
    stuff.map(i => {
      // const [num, double] = React.useState(3) //<--- @TODO uncomment this to see error
      //                    ^^^^^^^^^^^^^^
      return(
        <div key={i} onClick={()=>{double(i*2)}} >
          click me to double Me: {num}
        </div>
      )
    })
  )
}


// ==============================
// Rules of hook:
// Cannot be called in a callback
//
// example (2):
// callback in a function
// ==============================

// [eslint react-hooks/rules-of-hooks]
// React Hook "React.useState" cannot be called inside a callback.
// React Hooks must be called in a React function component or
// a custom React Hook function.
const MyAppTry2 = () => {
  const stuff = [1,2,3].map(i=>{
    // return [num, double] = React.useState(3) //<--- @TODO uncomment this to see error
    //                     ^^^^^^^^^^^^^^
  })

  return(
    stuff.map((s,i) => {
      const num = s[0]
      const setnum = s[1]
      return(
        <div key={i} onClick={()=>{setnum(num*2)}} >
          click me to double Me: {num}
        </div>
      )
    })
  )
}


// ==========================
// Rules of hook:
// Cannot be called in a loop
//
// example (3)
// ==========================

// [eslint react-hooks/rules-of-hooks]
// React Hook "React.useState" may be executed more than once.
// Possibly because it is called in a loop. React Hooks must be
// called in the exact same order in every component render
const MyAppTry3= () => {
  const stuff = []
  for (let i=1; i<=3; i++) {
    // stuff.push(React.useState(i))  //<--- @TODO uncomment this to see error
    //         ^^^^^^^^^^^^^^
  }

  return(
    stuff.map((s,i) => {
      const num = s[0]
      const setnum = s[1]
      return(
        <div key={i} onClick={()=>{setnum(num*2)}} >
          click me to double Me: {num}
        </div>
      )
    })
  )
}


// ==========================
// Rules of hook:
// Cannot be called in a loop
//
// example (3) that forced
// to work awewardly
// ==========================

const UnfortunatelyThisWorks = () => {
  const stuff = []
  stuff.push(React.useState(1))
  stuff.push(React.useState(2))
  stuff.push(React.useState(3))

  return(
    stuff.map((s,i) => {
      const num = s[0]
      const setnum = s[1]
      return(
        <div key={i} onClick={()=>{setnum(num*2)}} >
          click me to double Me: {num}
        </div>
      )
    })
  )
}

ReactDOM.render(<UnfortunatelyThisWorks />, reactContainer)

