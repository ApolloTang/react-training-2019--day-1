const reactContainer = document.getElementById('react-container')

const dialogueStyle = {
  position: 'absolute',
  top: '100px', left:'100px', right:'100px', bottom:'100px',
  outline: '1px grey solid'
}



// ==========================================================================
// Linting warning
// [eslint react-hooks/exhaustive-deps] React Hook React.useEffect
// has a missing dependency: 'closeDialogue'. Either include it
// or remove the dependency array.
// ==========================================================================



const Dialogue = ({closeDialogue, children}) => {
  // Effect for adding/removing event listener
  React.useEffect(()=>{
    console.log('Dialogue mounted, will add event listener')
    window.addEventListener('click', closeDialogue)

    return () => {
      console.log('Dialogue unmounted, will remove event listener')
      window.removeEventListener('click', closeDialogue)
    }
  }, [closeDialogue])
  // }, [])  /// <--- linter will complain
  // })      /// <--- or remove the dependency array but will fire on each render
  //         /// will fix this in refactor during next example

  return <div style={dialogueStyle}>{children}</div>
}



const InfoDialogue = ({children}) => {
  const [isOpen, updateIsOpen] = React.useState(false)

  const openDialogue = () => { updateIsOpen(true) }
  const closeDialogue = () => { updateIsOpen(false) }

  return(
    <div>
      <div>This one use effect hook</div>
      <button onClick={openDialogue} disabled={isOpen}>Open info dialogue</button>
      {isOpen && <div>click any where to close dialoge</div>}
      {isOpen && <Dialogue closeDialogue={closeDialogue}>{children}</Dialogue>}
    </div>
  )
}


const MyApp = () => <InfoDialogue>Dialogue content</InfoDialogue>




ReactDOM.render(<MyApp />, reactContainer)

