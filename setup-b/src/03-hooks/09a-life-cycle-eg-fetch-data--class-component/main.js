const reactContainer = document.getElementById('react-container')

const dialogueStyle = {
  position: 'absolute',
  top: '100px', left:'100px', right:'100px', bottom:'100px',
  outline: '1px grey solid',
  overflow: 'auto'
}


const api = {
  getReddit: () => {
    // return new CancelablePromise((rs)=>{
    //   fetch('https://www.reddit.com/r/reactjs.json').then(
    //     response => response.json()
    //   ).then(json=>rs(json))
    // })

    return new CancelablePromise(rs=>{
      const json = {foo:'foo'}
      setTimeout(()=>rs(json), 2000)
    })
  }
}



class Dialogue extends React.Component {
  state = {
    json: null,
    isLoading: false
  }

  componentDidMount = async () => {
    console.log('Dialogue mounted, will add event listener, will fetch data')

    window.addEventListener('click', this.props.closeDialogue)

    this.setState({isLoading:true})
    this.getReddit = api.getReddit()
    try {
      const json = await this.getReddit
      this.setState({isLoading:false})
      this.setState({json})
    } catch (er) {
      console.log(er)
    }
  }

  componentWillUnmount() {
    console.log('Dialogue unmounted, will remove event listener')
    this.getReddit.cancel('fetching canceled') // <--- must cancel promise to prevent memory leaks
    window.removeEventListener('click', this.props.closeDialogue)
  }

  render() {
    return (
      <div style={dialogueStyle}>
        {
          this.state.isLoading
            ? <div> ...loading </div>
            : <code><pre>{JSON.stringify(this.state.json, null, 2)}</pre></code>
        }
      </div>
    )
  }
}



const InfoDialogue = () => {
  const [isOpen, updateIsOpen] = React.useState(false)

  const openDialogue = e => {
    e.stopPropagation()
    updateIsOpen(true)
  }
  const closeDialogue = () => { updateIsOpen(false) }

  return(
    <div>
      <button onClick={openDialogue} disabled={isOpen}>Open info dialogue</button>
      {isOpen && <Dialogue closeDialogue={closeDialogue}/> }
    </div>
  )
}


const MyApp = () => <InfoDialogue>Dialogue content</InfoDialogue>
ReactDOM.render(<MyApp />, reactContainer)



class CancelablePromise {
  // https://stackoverflow.com/a/57459509/3136861
  constructor(executor) {
    let _reject = null
    const cancelablePromise = new Promise((resolve, reject) => {
      _reject = reject
      return executor(resolve, reject)
    })
    cancelablePromise.cancel = _reject
    return cancelablePromise
  }
}
