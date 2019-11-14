import React from 'react'
import ReactDOM from 'react-dom'

const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

// =====================================



import {TodoApp} from './app'



// =====================================

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
)

