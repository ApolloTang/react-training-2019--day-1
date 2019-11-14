const reactContainer = document.getElementById('react-container')


// Array iteration

const MyApp = () => (
  ['a','b','c','d'].map(
      item => <div key={_.uniqueId()} >{item}</div>
  )
)



ReactDOM.render(<MyApp />, reactContainer)
