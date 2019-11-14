const reactContainer = document.getElementById('react-container')

// Array item must have key
// else you might have unpredicted bahaviour

const MyApp = () => (
   <div>
    {[
      <div key={_.uniqueId()} >one</div>,
      <div key={_.uniqueId()} >two</div>,
      <div key={_.uniqueId()} >three</div>,
    ]}
  </div>
)



ReactDOM.render(<MyApp />, reactContainer)
