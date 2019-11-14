import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  NewTodo,
  makeNewTodo
} from '../new-todo'

describe('[New Todo Component]', ()=>{
  const regex_newTodoLabel = /enter.todo/i

  test('Render a input field', () =>{
    const {
      getByLabelText,
    } = render(<NewTodo/>)

    getByLabelText(regex_newTodoLabel)
  })

  test('Input field take user values', () =>{
    const {
      getByLabelText,
    } = render(<NewTodo/>)

    const newTodoInput = getByLabelText(regex_newTodoLabel)

    const todoText = 'learn react'
    userEvent.type(newTodoInput, todoText)
    expect(newTodoInput).toHaveAttribute('value', todoText)
  })

  test('Can submit a todo, and reset itself', () =>{
    const newTodoSubmitCallback = jest.fn()

    const {
      getByLabelText,
      getByTestId,
    } = render(<NewTodo newTodoSubmit={newTodoSubmitCallback}/>)

    const todoText = 'learn react'
    const newTodoInput = getByLabelText(regex_newTodoLabel)
    const newTodoForm = getByTestId('new-todo-form')

    userEvent.type(newTodoInput, todoText)
    fireEvent.submit(newTodoForm)

    // Submit the form
    expect(newTodoSubmitCallback).toHaveBeenCalledWith(
      {
        'completed': false,
        'id': '1',
        'text': todoText,
        'timeStamp': expect.any(Number) // more fine grain test below
      }
    )

    // Reset the form
    expect(newTodoInput).toHaveAttribute('value', '')
  })
})



describe('makeNewTodo', ()=>{
  it('can create time stamp', ()=>{
    const todoTexts = ['learn react', 'learn redux']

    const todoObjs = todoTexts.map( todoText => {
      const timeBefore = Date.now()
      const todoObj = makeNewTodo(todoText)
      const timeAfter = Date.now()
      return {
        testTimeStamp: {timeBefore, timeAfter},
        todoObj
      }
    })

    expect(todoObjs[0].testTimeStamp.timeBefore).toBeLessThanOrEqual(todoObjs[0].todoObj.timeStamp)
    expect(todoObjs[0].testTimeStamp.timeAfter).toBeGreaterThanOrEqual(todoObjs[0].todoObj.timeStamp)
  })
})
