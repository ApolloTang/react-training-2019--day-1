import deepFreeze from 'deep-freeze'

import {
  addTodo,
  deleteTodo,
  toggleTodo
}  from './todos-arrays--pure'
// }  from './todos-arrays--impure'


describe('[Modeling todos list array]', ()=>{
  describe('[CRUD operation]', ()=>{
    let todos

    beforeEach(()=>{
      todos = [
        { id:'1', text: 'buy milk', completed:false },
        { id:'2', text: 'buy cheese', completed:false },
      ]
    })

    it('can add todo', ()=>{
      const newTodo = { id:'3', text: 'buy fruit', completed:false }
      const todosNext = addTodo(todos, newTodo)
      expect(todosNext).toContainEqual(newTodo)
    })

    it('can delete todo', ()=>{
      const length = todos.length
      expect(todos).toContainEqual({ id:'1', text: 'buy milk', completed:false })

      const todosNext = deleteTodo(todos, '1')
      const lengthNext = todosNext.length

      expect(todosNext).not.toContainEqual({ id:'1', text: 'buy milk', completed:false })
      expect(lengthNext).toBe(length-1)
    })

    it('can toggle todo', ()=>{
      expect(todos).toContainEqual({ id:'1', text: 'buy milk', completed:false })

      const todosNext = toggleTodo(todos, '1')

      expect(todosNext).not.toContainEqual({ id:'1', text: 'buy milk', completed:false })
      expect(todosNext).toContainEqual({ id:'1', text: 'buy milk', completed:true })
    })
  })


  describe('[change detection (identity test)]', ()=>{
    let todosPrev

    beforeEach(()=>{
      todosPrev = [
        { id:'1', text: 'buy milk', completed:false },
        { id:'2', text: 'buy cheese', completed:false },
      ]
    })

    it('add todo', ()=>{
      const newTodo = { id:'3', text: 'buy fruit', completed:false }
      const todosNext = addTodo(todosPrev, newTodo)
      expect(todosNext).not.toBe(todosPrev)
    })

    it('delete todo', ()=>{
      const todosNext = deleteTodo(todosPrev, '1')
      expect(todosNext).not.toBe(todosPrev)
    })

    it('toggle todo', ()=>{
      const todosNext = toggleTodo(todosPrev, '1')
      expect(todosNext).not.toBe(todosPrev)
    })
  })


  describe('[mutation test]', ()=>{
    let todos

    beforeEach(()=>{
      todos = [
        { id:'1', text: 'buy milk', completed:false },
        { id:'2', text: 'buy cheese', completed:false },
      ]

      deepFreeze(todos) // <---- deepFreeze
    })

    it('add todo', ()=>{
      const newTodo = { id:'3', text: 'buy fruit', completed:false }
      const todosNext = addTodo(todos, newTodo)
      expect(todosNext).toContainEqual(newTodo)
    })

    it('delete todo', ()=>{
      const length = todos.length
      expect(todos).toContainEqual({ id:'1', text: 'buy milk', completed:false })

      const todosNext = deleteTodo(todos, '1')
      const lengthNext = todosNext.length

      expect(todosNext).not.toContainEqual({ id:'1', text: 'buy milk', completed:false })
      expect(lengthNext).toBe(length-1)
    })

    it('toggle todo', ()=>{
      expect(todos).toContainEqual({ id:'1', text: 'buy milk', completed:false })

      const todosNext = toggleTodo(todos, '1')

      expect(todosNext).not.toContainEqual({ id:'1', text: 'buy milk', completed:false })
      expect(todosNext).toContainEqual({ id:'1', text: 'buy milk', completed:true })
    })
  })
})


/*

  jest matcher toContainEqual()
  ==============================

    - Check that an item with a specific structure and values
      is contained in an array.
    - This matcher recursively checks the equality of all fields,
       rather than checking for object (reference) identity.

  https://jestjs.io/docs/en/expect#tocontainequalitem

*/

