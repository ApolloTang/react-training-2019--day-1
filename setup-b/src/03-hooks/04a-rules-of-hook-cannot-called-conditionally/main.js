const reactContainer = document.getElementById('react-container')

// ==============================
// Rules of hook:
// Cannot be called conditionally
// ==============================



// [eslint react-hooks/rules-of-hooks]
// React Hook "useState" is called conditionally. React Hooks
// must be called in the exact same order in every component render.
const MyApp = () => {
  const isTrue = true

  if (isTrue) {
    // const [myIllegalState_Bad, updateMyIllegalState_Bad] = React.useState('') //<--- @TODO uncomment this to see error
    //                                                     ^^^^^^^^^^^^^^
  }

    const [myIllegalState, updateMyIllegalState] = React.useState('')

  return(
    <>
      <button onClick={()=>{updateMyIllegalState('bad')}} >click me</button>
      {myIllegalState}
    </>
  )
}






ReactDOM.render(<MyApp />, reactContainer)

