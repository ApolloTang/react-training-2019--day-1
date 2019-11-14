const reactContainer = document.getElementById('react-container')

const style = {margin: '10px', outline:'solid 1px', width: '200px', padding:'10px'}

//
// See console for output as you play with the component
//
// Watching for mounting and unmounting of commponent
//

class Child extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('    after render')
    if (prevProps.toggle !== this.props.toggle) {
      console.log('toggle changed: ', this.props.toggle)
    }
  }

  render() {
    return (
      <div style={style}>
        <div>{this.props.toggle}</div>
        <div>{this.props.count}</div>
      </div>
    )
  }
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
      <div> This one is with class </div>

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

