import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import {TodoItem} from '../todo-item'


describe('[TodoItem]', ()=>{
  it('todo item is render, delete able, and toggle able', ()=>{
    const todo = {
      'completed': false,
      'id': '1',
      'text': 'learn react',
      'timeStamp': Date.now()
    }
    const deleteTodoCallback = jest.fn()
    const toggleTodoCallback = jest.fn()

    const {
      getByTestId,
      getByText,
      getByLabelText
    } = render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodoCallback}
        toggleTodo={toggleTodoCallback}
      />
    )

    // todo-item exist:
    getByTestId('todo-item')

    // todo item text exit:
    getByText(todo.text)

    // can fire delete button:
    const deleteButton = getByText('X')
    fireEvent.click(deleteButton)
    expect(deleteTodoCallback).toHaveBeenCalled()

    // can toggle todo:
    const clickableTodoLabel = getByLabelText(todo.text)
    fireEvent.click(clickableTodoLabel)
    expect(toggleTodoCallback).toHaveBeenCalled()
  })

})
