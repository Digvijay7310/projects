import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo, toggleTodo, removeTodo} from './features/todos/todoSlice'

function App() {
  const [todoText, setTodoText] = useState('')
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if(todoText.trim()){
      dispatch(addTodo(todoText))
      setTodoText("")
    }
  }

  return (
    <div style={{padding: "20px"}}>
      <h1>Todo App with Redux</h1>
      <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder='Enter Todo' />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{margin: "10px 0"}}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}
              style={{textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer"}}>
                {todo.text}
              </span>
              <button onClick={() => dispatch(removeTodo(todo.id))} style={{marginLeft: "10px"}}>
                Delete
              </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App