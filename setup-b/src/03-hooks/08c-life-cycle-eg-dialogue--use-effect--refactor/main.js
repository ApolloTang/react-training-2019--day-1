const reactContainer = document.getElementById('react-container')

const dialogueStyle = {
  position: 'absolute',
  top: '100px', left:'100px', right:'100px', bottom:'100px',
  outline: '1px grey solid'
}


const InfoDialogue = ({children}) => {
  const [isOpen, updateIsOpen] = React.useState(false)

  const openDialogue = () => { updateIsOpen(true) }
  const closeDialogue = () => { updateIsOpen(false) }


    // ==================
    // Dialogue component
    // ==================
    const Dialogue = ( /* nothing passing and dependency */ ) => {
      // Effect for adding/removing event listener
      React.useEffect(()=>{
        console.log('Dialogue mounted, will add event listener')
        window.addEventListener('click', closeDialogue)

        return () => {
          console.log('Dialogue unmounted, will remove event listener')
          window.removeEventListener('click', closeDialogue)
        }
      }, []) // <--- with this refactor we can leave dependency array empty

      return <div style={dialogueStyle}>{children}</div>
    }


  return(
    <div>
      <div>This one is the refactored effect hook</div>
      <button onClick={openDialogue} disabled={isOpen}>Open info dialogue</button>
      {isOpen && <div>click any where to close dialoge</div>}
      {isOpen && <Dialogue /> }
    </div>
  )
}


const MyApp = () => <InfoDialogue>Dialogue content</InfoDialogue>




ReactDOM.render(<MyApp />, reactContainer)

