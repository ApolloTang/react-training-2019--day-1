const reactContainer = document.getElementById('react-container')

//
// Root of component as Fragment
//
//
// [Activity]
//
// 1. Inspect component root with Ract devtool
//
// 2. Change:
//     ReactDOM.render(<MyApp />, reactContainer)
//    to:
//     ReactDOM.render(<MyApp_arrayRoot />, reactContainer)
//

const ComponentOne = () => (
  <div>
    One
  </div>
)

const ComponentTwo = () => (
  <>
    Two
  </>
)


const MyApp = () => (
  <>
    <ComponentOne />
    <ComponentTwo />
  </>
)


{/* the following is same as above */}

  const MyApp_arrayRoot = () => (
    [
      <ComponentOne />,
      <ComponentTwo />
    ]
  )


ReactDOM.render(<MyApp />, reactContainer)
// ReactDOM.render(<MyApp_arrayRoot />, reactContainer)
