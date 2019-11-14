const reactContainer = document.getElementById('react-container')

//
// Composition with children property
//


const ChildOne = () => <tr><td> row one </td></tr>
const ChildTwo = () => <tr><td> row two </td></tr>


const Parent = props => (
  <table border="1">
    <tbody>
      {props.children}
    </tbody>
  </table>
)


const MyApp = () => (
  <Parent>
    <ChildOne />
    <ChildTwo />
  </Parent>
)

ReactDOM.render(<MyApp />, reactContainer)
