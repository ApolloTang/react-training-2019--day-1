const reactContainer = document.getElementById('react-container')

//
// [Activity]
//
// 1. In inspector how jsx is transpiled into vanilla js
// 2. try transpile jsx with https://babeljs.io/repl/
//

const MyApp = () => <div>Hello World</div>


ReactDOM.render(<MyApp />, reactContainer)
