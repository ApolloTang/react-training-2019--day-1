const reactContainer = document.getElementById('react-container')


const Child = () => <tr><td> row </td></tr>




// ============================================================
// When there is only one child 'children' is not an array, you
// cannot use map
// ============================================================


// [Activity]
//
// Change:
//   ReactDOM.render(<MyApp_problem />, reactContainer)
// to:
//   ReactDOM.render(<MyApp_fixed />, reactContainer)
//



//
// These parents does not known how many children they have:
//
const ParentWithUnknownChildren_problem = props => {
  try {
    Array.isArray(props.children)

    return(
      <table>
        <tbody>
          {props.children.map(child=>child)}
        </tbody>
      </table>
    )
  } catch (er) {
    return <div>sorry children is not type Array</div>
  }
}


// Fix with help React.Children
const ParentWithUnknownChildren_fixed = props => (
  <table>
    <tbody>
      {React.Children.map(props.children, child=>child)}
    </tbody>
  </table>
)


const MyApp_problem = () => (
  <ParentWithUnknownChildren_problem>
    <Child/>
  </ParentWithUnknownChildren_problem>
)


const MyApp_fixed = () => (
  <ParentWithUnknownChildren_fixed>
    <Child/>
  </ParentWithUnknownChildren_fixed>
)


// ReactDOM.render(<MyApp_problem />, reactContainer)
ReactDOM.render(<MyApp_fixed />, reactContainer)
