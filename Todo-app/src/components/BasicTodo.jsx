import { useState } from 'react'

function BasicTodo() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: editText };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ margin: "10px 0" }}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSave(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <input type="text" value={todo.text} readOnly />
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              </>
            )}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicTodo;
