const reactContainer = document.getElementById('react-container')


//
// [Activity]
// Inspect component composition with Ract devtool
//


const ComponentOne = () => (
  <div>
    One
  </div>
)

const ComponentTwo = () => (
  <div>
    Two
  </div>
)

const ComponentThree = () => (
  <div style={{outline: 'solid black 1px', width:'150px', padding:'5px' }}>
    component three
    <ComponentOne />
    <ComponentTwo />
  </div>
)


const MyApp = () => (
  <div>
    <ComponentOne />
    <ComponentTwo />
    <ComponentThree />
  </div>
)



ReactDOM.render(<MyApp />, reactContainer)
