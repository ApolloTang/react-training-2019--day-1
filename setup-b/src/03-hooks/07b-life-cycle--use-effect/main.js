const reactContainer = document.getElementById('react-container')

const style = {margin: '10px', outline:'solid 1px', width: '200px', padding:'10px'}



const Child = ({count, toggle}) => {

  React.useEffect(()=>{
    console.log('mount')
    return ()=>{ console.log('unMount')}
  }, [])

  React.useEffect(()=>{
    console.log('mount or toggle changed:', toggle)
    // This will fire when toggle changed and during mounting as well:
    // https://stackoverflow.com/a/54924104/3136861
  }, [toggle])

  React.useEffect(()=>{
    console.log('    after render')
  })

  return (
    <div style={style}>
      <div>{toggle}</div>
      <div>{count}</div>
    </div>
  )
}




const MyApp = () => {
  const [count, increaesCount] = React.useState(1)
  const handle_click = e => {
    e.preventDefault()
    increaesCount(count+1)
  }

  const [mount, updateMount] = React.useState('Mounted')
  const handle_mount = e => {
    const value = e.target.value
    updateMount(value)
  }

  const [toggle, updateToggle] = React.useState('yes')
  const handle_toggle = e => {
    const value = e.target.value
    updateToggle(value)
  }

  return(
    <div>
      <div> This one is with hooks </div>
      <form style={style}>
        <button onClick={handle_click} >increase count</button>
      </form>

      <form style={style}>
        <label htmlFor="toggleTrue">
          yes: <input type="radio" onChange={handle_toggle} id="toggleTrue" name="toggle" value="yes" checked={toggle==='yes'}/>
        </label>{' '}
        <label htmlFor="toggleFalse">
          no: <input type="radio" onChange={handle_toggle} id="toggleFalse" name="toggle" value="no" checked={toggle==='no'}/>
        </label>
      </form>

      <form style={style}>
        <label htmlFor="mount">
          mount: <input type="radio" onChange={handle_mount} id="mount" name="mount" value="Mounted" checked={mount==='Mounted'}/>
        </label>{'  '}
        <label htmlFor="unmount">
          unMount: <input type="radio" onChange={handle_mount} id="unmount" name="mount" value="Unmounted" checked={mount==='Unmounted'}/>
        </label>
      </form>
      <div>{mount==='Mounted'? <Child count={count} toggle={toggle}/> : null}
    </div>
    </div>
  )
}


ReactDOM.render(<MyApp />, reactContainer)

