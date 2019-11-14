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



const InfoDialogue = () => {
  const [isOpen, updateIsOpen] = React.useState(false)

  const openDialogue = () => { updateIsOpen(true) }
  const closeDialogue = () => { updateIsOpen(false) }


    // ==================
    // Dialogue component
    // ==================
    const Dialogue = () => {
      const [json, updateJson ] = React.useState(null)
      const [isLoading, updateIsLoading ] = React.useState(false)


      // ********************************************************
      //   effect let you separate your concern into chunk and
      //   help you better organize your code
      // ********************************************************


      // Effect for adding/removing click event listener
      // -----------------------------------------------
        React.useEffect(()=>{
          console.log('Dialogue mounted, will add event listener')
          window.addEventListener('click', closeDialogue)

          return () => {
            console.log('Dialogue unmounted, will remove event listener')
            window.removeEventListener('click', closeDialogue)
          }
        }, [])


      // Effect for fetching data
      // ------------------------
        React.useEffect(()=>{
          console.log('Dialogue mounted, will fetch data')

          updateIsLoading(true)

          const getReddit = api.getReddit()
          getReddit.catch(console.log)
          getReddit.then( json=>{
            updateIsLoading(false)
            updateJson(json)
          })

          return () => {
            console.log('Dialogue unmounted, will cancel fetch data')
            getReddit.cancel('fetching canceled') // <--- must cancel promise to prevent memory leaks
          }
        }, [])


      return (
        <div style={dialogueStyle}>
          {
            isLoading
              ? <div> ...loading </div>
              : <code><pre>{JSON.stringify(json, null, 2)}</pre></code>
          }
        </div>
      )
    }


  return(
    <div>
      <button onClick={openDialogue} disabled={isOpen}>Open info dialogue</button>
      {isOpen && <Dialogue/> }
    </div>
  )
}


const MyApp = () => <InfoDialogue />
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
