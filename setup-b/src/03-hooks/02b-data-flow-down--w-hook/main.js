const reactContainer = document.getElementById('react-container')

const styleGrandChild = {outline:'solid 1px', width:'200px', padding:'10px'}
const styleChild = {outline: 'solid 1px', width: '300px', padding: '10px'}

// ==========================================
// This show how data flow down into children
// ==========================================
//
// This is same almost same as 2a
// but class is now removed and converted to hook
//
// [!] almost the same b/c ---> note that you cannot update partial
//                              state with hook
//



const GrandChild = ({name, state}) => (
  <div style={styleGrandChild}>
    <div>{name}: {state[name]}</div>
  </div>
)


const Child = ({name, state}) =>  (
  <div style={styleChild}>
    <div>{name}: {state[name]}</div>
    <GrandChild name="grandChild" state={state} />
  </div>
)



const MyApp = () =>{
  const [state, updateState] = React.useState({
    'child':'',
    'grandChild':''
  })

  const handle_formChange = e => {
    const name = e.target.id
    const message = e.target.value
    updateState({ [name]: message }) // This will not work, cannot update partial state

    //// Must update the entire state:
      // updateState({
      //   ...state,       // shallow clone previous state
      //   [name]: message // over write prevState
      // })
  }

  return(
    <>
      <code><pre>
        message: {JSON.stringify(state, null, 2)}
      </pre></code>

      <Child name="child" state={state} />

      <form onChange={handle_formChange}>
        <div>
          <label htmlFor="child">message for child: <input type="text" id="child" /></label>
        </div>
        <div>
          <label htmlFor="grandChild">message for grandChild: <input type="text" id="grandChild" /></label>
        </div>
      </form>
    </>
  )
}


ReactDOM.render(<MyApp />, reactContainer)


