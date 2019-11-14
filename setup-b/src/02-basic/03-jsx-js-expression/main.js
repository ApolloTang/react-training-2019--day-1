const reactContainer = document.getElementById('react-container')


// You place js expression in braces


const MyApp = () => {

  const foo = 'foo bar'

  return (
    <div>
      { /* This is a comment */ }


      { /* Variable interpolation */ }
        <p>variable foo has the value: {foo}</p>


      { /* Template literals */ }
        <p>{ `1 + 1 = ${1+1}` }</p>


      { /* Ternary Operator */ }
        <p>{ true  ? <b>true</b> : null         }</p>
        <p>{ false ? null        : <b>false</b> }</p>


      { /* Does not take 'if' statement  */ }
      {
      /*
        if (true)  { <b>true</b> }
      */
      }

    </div>
  )
}



ReactDOM.render(<MyApp />, reactContainer)
