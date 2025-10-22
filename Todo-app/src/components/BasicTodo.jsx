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

    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleDelete = (id) => {
    setIsDialogOpen(true)
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
    <div className=" flex justify-center items-center flex-col min-h-screen" >
      <form onSubmit={handleSubmit} className='border'>
        <input
          type="text"
          placeholder="Enter todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='w-[200px] border-none outline-0 ring-0'
        />
        <button type="submit" className='bg-green-600 text-white px-2 py-1'>Add Todo</button>
      </form>

      <div  className='h-[400px]'>
        {todos.map((todo) => (
          <div key={todo.id} style={{ margin: "10px 0" }} >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className='bg-gray-100 px-2 py-1 w-[200px]'
                />
                <button onClick={() => handleSave(todo.id)} className='bg-green-400 px-2 py-1 text-white'>Save</button>
              </>
            ) : (
              <>
                <input type="text" value={todo.text} readOnly className='w-[200px] px-2 py-1 bg-gray-100' />
                <button onClick={() => handleEdit(todo.id, todo.text)} className='bg-yellow-300 px-2 py-1 '>Edit</button>
              </>
            )}
            <button onClick={() => handleDelete(todo.id)} className='bg-red-600 px-2 py-1 text-white'>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicTodo;
