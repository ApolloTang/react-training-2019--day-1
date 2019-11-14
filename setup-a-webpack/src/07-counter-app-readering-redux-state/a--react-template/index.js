import React from 'react'
import ReactDOM from 'react-dom'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

// =====================================


const App = () => (
  <div>Hello world</div>
)


// =====================================
ReactDOM.render(
  <App />,
  document.getElementById('app')
)

