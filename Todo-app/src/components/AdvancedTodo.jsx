import React, { useEffect, useState } from 'react'

function AdvancedTodo() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")
  const [isEditable, setIsEditable] = useState(false)
  const [editIndex, setEditIndex] = useState(null)


  useEffect(() => {
    const savedTasks = sessionStorage.getItem("my-tasks")
    if(savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("my-tasks", JSON.stringify(tasks))
  }, [tasks])
  const handleOnClick = (e) => {
    e.preventDefault()

    if (input.trim()) {
      if (isEditable && editIndex !== null) {
        const updatedTasks = [...tasks]
        updatedTasks[editIndex].text = input
        setTasks(updatedTasks)
        setIsEditable(false)
        setEditIndex(null)
        setInput("")
      } else {
        setTasks([...tasks, { text: input, done: false }])
        setInput("")
      }
    }
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
  }

  const editTask = (index) => {
    const taskToEdit = tasks[index]
    setInput(taskToEdit.text)
    setIsEditable(true)
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
    if (editIndex === index) {
      setIsEditable(false)
      setEditIndex(null)
      setInput("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">📝 Advanced Todo App</h1>

        <form onSubmit={handleOnClick} className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {isEditable ? "Update" : "Add"}
          </button>
        </form>

        <ul className="space-y-2 h-30 overflow-y-auto ">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-3 rounded border hover:shadow"
            >
              <span
                onClick={() => toggleTask(index)}
                className={`flex-1 cursor-pointer ${
                  task.done ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {task.text}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => editTask(index)}
                  className="px-2 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdvancedTodo
