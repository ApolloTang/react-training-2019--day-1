const reactContainer = document.getElementById('react-container')

const styleGrandChild = {outline: 'solid 1px', width: '200px', padding: '10px'}
const styleChild = {outline: 'solid 1px', width: '300px', padding: '10px'}



// ==========================================
// This show how data flow down into children
// ==========================================

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



class MyApp extends React.Component {
  state = {
    'child':'',
    'grandChild':''
  }

  handle_formChange = e => {
    const name = e.target.id
    const message = e.target.value
    this.setState({[name]:message})
  }

  render() {
    return(
      <>
        <code><pre>
          message: {JSON.stringify(this.state, null, 2)}
        </pre></code>

        <Child name="child" state={this.state} />

        <form onChange={this.handle_formChange}>
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
}







ReactDOM.render(<MyApp />, reactContainer)


