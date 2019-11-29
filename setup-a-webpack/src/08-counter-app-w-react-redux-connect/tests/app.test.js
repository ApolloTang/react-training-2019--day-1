import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {
  render,
  fireEvent
} from '@testing-library/react'

import {reducer} from '../reducer'
import {ConnectedApp} from '../app'


test('can render app with redux defaults state', ()=>{
  const store = createStore(reducer)
  const {
    getByText
  } = render(
    <Provider store={store} >
      <ConnectedApp />
    </Provider>
  )
  const counterDisplay = getByText(/count:/i)
  expect(counterDisplay).toHaveTextContent('0')
})


test('can increase counter from default state', ()=>{
  const store = createStore(reducer)
  const {
    getByText
  } = render(
    <Provider store={store} >
      <ConnectedApp />
    </Provider>
  )
  const counterDisplay = getByText(/count:/i)
  const increaseButton = getByText('+')
  expect(counterDisplay).toHaveTextContent('0')
  fireEvent.click(increaseButton)
  expect(counterDisplay).toHaveTextContent('1')
})


test('can decrease counter from default state', ()=>{
  const store = createStore(reducer)
  const {
    getByText,
  } = render(
    <Provider store={store} >
      <ConnectedApp />
    </Provider>
  )
  const counterDisplay = getByText(/count:/i)
  const increaseButton = getByText('-')
  expect(counterDisplay).toHaveTextContent('0')
  fireEvent.click(increaseButton)
  expect(counterDisplay).toHaveTextContent('-1')
})
