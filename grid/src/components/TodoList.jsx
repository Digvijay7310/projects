import React, { useEffect, useState } from 'react';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('chai-todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('chai-todos', JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    setTodos([newTodo, ...todos]);
    setTodo('');
  };

  // Delete Todo
  const deleteTodo = (id) => {
    const filtered = todos.filter((t) => t.id !== id);
    setTodos(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-4">📝 Chai Todo App</h1>

      <form onSubmit={addTodo} className="flex gap-2">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="What needs to be done?"
          className="px-4 py-2 rounded-md border shadow-sm focus:outline-none"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Todo
        </button>
      </form>

      <ul className="mt-6 w-full max-w-md space-y-2">
        {todos.length === 0 && (
          <p className="text-center text-gray-500">No todos yet!</p>
        )}
        {todos.map((item) => (
          <li
            key={item.id}
            className="bg-white p-3 flex justify-between items-center shadow-md rounded-md"
          >
            <span>{item.text}</span>
            <button
              onClick={() => deleteTodo(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
