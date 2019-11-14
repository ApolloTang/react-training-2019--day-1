import React from 'react'
import {render, fireEvent, within, getNodeText} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {TodoApp} from '../app.js'


describe('Todo App',()=>{
  const regex_newTodoLabel = /enter.todo/i

  test('Render a "Adding todo" input field', () =>{
    const {
      getByLabelText,
    } = render(<TodoApp/>)

    getByLabelText(regex_newTodoLabel)
  })


  test('Add todo input take user values', () =>{
    const {
      getByLabelText,
    } = render(<TodoApp/>)

    const newTodoInput = getByLabelText(regex_newTodoLabel)

    const todo = 'learn react'
    userEvent.type(newTodoInput, todo)
    expect(newTodoInput).toHaveAttribute('value', todo)
  })


  test('Can create todos [Operations: Create, Read]', () =>{
    const {
      getByLabelText,
      getByTestId,
    } = render(<TodoApp/>)

    const todoTexts = [
      'learn react', 'learn redux', 'learn typescript'
    ]

    const newTodoInput = getByLabelText(regex_newTodoLabel)
    const newTodoForm = getByTestId('new-todo-form')
    const todoList = getByTestId('todo-list')

    todoTexts.forEach(todoText=>{
      expect(todoList).not.toHaveTextContent(todoText)
    })

    todoTexts.forEach(todoText=>{
      userEvent.type(newTodoInput, todoText)
      fireEvent.submit(newTodoForm)
    })

    todoTexts.forEach(todoText=>{
      expect(todoList).toHaveTextContent(todoText)
    })
  })


  test('Can update todos [Operation: update]', () =>{
    const {
      getByLabelText,
      getByText,
      getByTestId,
      getAllByTestId
    } = render(<TodoApp/>)

    const todoTexts = [
      'learn react', 'learn redux', 'learn typescript'
    ]

    // We want to update todo item with the following text
    // const todoText_toUpdate = [...todoTexts].splice(1,1)[0]  // 'learn redux'
    const todoText_toUpdate = todoTexts[1]  // 'learn redux'

    const newTodoInput = getByLabelText(regex_newTodoLabel)
    const newTodoForm = getByTestId('new-todo-form')

    // create todo items
    todoTexts.forEach(todoText=>{
      userEvent.type(newTodoInput, todoText)
      fireEvent.submit(newTodoForm)
    })

    // now todoItems has been created
    getAllByTestId('todo-item')

    // get the checkbox;
    const checkboxToCheck = getByLabelText(todoText_toUpdate)

    // pre test:
    expect(checkboxToCheck.checked).toBe(false)

    // click it:
    fireEvent.click(getByText('learn redux'))

    // test it:
    expect(checkboxToCheck.checked).toBe(true)
  })


  test('Can deleted todos [Operation: delete]', () =>{
    const {
      getByLabelText,
      getByTestId,
      getAllByTestId
      } = render(<TodoApp/>)

    const todoTexts = [
      'learn react', 'learn redux', 'learn typescript'
    ]

    // We want to remove todo item with the following text
    const todoText_toDelete = todoTexts[1]  // 'learn redux'

    const newTodoInput = getByLabelText(regex_newTodoLabel)
    const newTodoForm = getByTestId('new-todo-form')
    const todoList = getByTestId('todo-list')

    // create todo items
    todoTexts.forEach(todoText=>{
      userEvent.type(newTodoInput, todoText)
      fireEvent.submit(newTodoForm)
    })

    // now todo items has been created
    const todoItems = getAllByTestId('todo-item')

    // Since delete button is not inside label element:
    //
    //   <div data-testid="todo-item">
    //     <button>X</button>
    //     <label htmlFor={`todo-${todo.id}`} >
    //       <input type="checkbox" id={`todo-${todo.id}`} />
    //       {todo.text}
    //     </label>
    //   </div>
    //
    // we cannot use getByText('learn redux') to reach our targeted
    // delete button <button>X</button>.
    //
    // To get the partical delete button we have to search among
    // all our data-testid="todo-item":

    const todoItemsToDelete = todoItems.filter( (todoItem)=>{
      const label = todoItem.querySelector('label')
      return (label)? getNodeText(label) === todoText_toDelete : false
      // the predicate of this filter look for label
      // with text node that has the text we want.
    })

    // Now we have the item, we can "go within" to get the delete button:
    const deleteTodoButton = within(todoItemsToDelete[0]).getByText('X')

    // delete it:
    fireEvent.click(deleteTodoButton)

    // test it:
    expect(todoList).not.toHaveTextContent(todoText_toDelete)
  })
})