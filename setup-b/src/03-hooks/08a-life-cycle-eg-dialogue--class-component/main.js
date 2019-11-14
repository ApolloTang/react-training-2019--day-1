const reactContainer = document.getElementById('react-container')

const dialogueStyle = {
  position: 'absolute',
  top: '100px', left:'100px', right:'100px', bottom:'100px',
  outline: '1px grey solid'
}


class Dialogue extends React.Component {
  componentDidMount() {
    console.log('Dialogue mounted, will add event listener')
    window.addEventListener('click', this.props.closeDialogue)
  }

  componentWillUnmount() {
    console.log('Dialogue unmounted, will remove event listener')
    window.removeEventListener('click', this.props.closeDialogue)
  }

  render() {
    return <div style={dialogueStyle}>{this.props.children}</div>
  }
}



const InfoDialogue = ({children}) => {
  const [isOpen, updateIsOpen] = React.useState(false)

  const openDialogue = e => {
    e.stopPropagation()
    updateIsOpen(true)
  }
  const closeDialogue = () => { updateIsOpen(false) }

  return(
    <div>
      <div>This one use class</div>
      <button onClick={openDialogue} disabled={isOpen}>Open info dialogue</button>
      {isOpen && <div>click any where to close dialoge</div>}
      {isOpen && <Dialogue closeDialogue={closeDialogue}>{children}</Dialogue> }
    </div>
  )
}


const MyApp = () => <InfoDialogue>Dialogue content</InfoDialogue>




ReactDOM.render(<MyApp />, reactContainer)

