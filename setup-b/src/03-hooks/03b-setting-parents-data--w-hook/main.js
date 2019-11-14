const reactContainer = document.getElementById('react-container')

const styleForm = {outline:'solid 1px', width:'300px', padding:'10px'}
const styleChild = {outline:'solid 1px', width:'200px', padding:'10px'}
const styleGrandChild = {outline:'solid 1px', width:'150px', padding:'10px'}


// ======================================================================
// This show how children change parents data via callback that pass down
// ======================================================================
//
// This is same almost same as 3a
// but class is now removed and converted to hook
//
// [!] almost the same b/c ---> note that you cannot update partial
//                              state with hook
//


const GrandChild = ({setParentData}) => {
  const handle_formChange = e => {
    setParentData(e.target.id, e.target.value)
  }

  return (
    <div style={styleGrandChild}>
      <form onChange={handle_formChange} >
        <label htmlFor="grandChild">
          grandChild message: <input type="text" id="grandChild" />
        </label>
      </form>
    </div>
  )
}


const Child = ({setParentData}) => {
  const handle_formChange = e => {
    setParentData(e.target.id, e.target.value)
  }

  return (
    <div style={styleChild}>
      <form onChange={ handle_formChange }>
        <label htmlFor="child">
          child message: <input type="text" id="child" />
        </label>
      </form>

      <div style={{padding: '10px'}}>
        <GrandChild setParentData={setParentData} />
      </div>
    </div>
  )
}


const MyApp = () => {
  const [state, updateState] = React.useState( {
    'child':'',
    'grandChild':''
  })

  const onChildEmitChange = (name, message) => {
    // updateState({ [name]: message })  // This will not work, cannot update partial state

    //// Must update the entire state
    updateState({
      ...state,
      [name]:message
    })
  }

  return(
    <>
      <code><pre>
        message: {JSON.stringify(state, null, 2)}
      </pre></code>

      <Child name="child" setParentData={onChildEmitChange} />
    </>
  )

}






ReactDOM.render(<MyApp />, reactContainer)

