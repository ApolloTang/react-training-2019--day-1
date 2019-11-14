const reactContainer = document.getElementById('react-container')


// ==================================
// cannot be called in a non react fn
// ==================================



// [eslint react-hooks/rules-of-hooks]
// React Hook "React.useState" is called in function "dontDoThis"
// which is neither a React function component or a custom React
// Hook function.

// const dontDoThis = ()=> React.useState()  // <--- @TODO uncomment this to see error
//                      ^^^^^^^^^^^^^^^^

const MyAppBad = () => {
  const [num, addOne] = dontDoThis()
  return (
    <>
      <button onClick={()=>addOne(num+1)}>Addone</button>
      <div>{num}</div>
    </>
  )
}




const MyAppFix = () => {
  const [num, addOne] = React.useState(1)
  return (
    <>
      <button onClick={()=>addOne(num+1)}>Add one</button>
      <div>{num}</div>
    </>
  )
}

ReactDOM.render(<MyAppFix />, reactContainer)

