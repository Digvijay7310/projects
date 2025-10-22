import React from 'react'
import BasicTodo from './components/BasicTodo'
import AdvancedTodo from './components/AdvancedTodo'

function App() {
  return (
    <div >
      <h1>Theme Switcher with context</h1>
      <button>Toggle Theme</button>
      <BasicTodo />
      <AdvancedTodo /> 


    </div>
  )
}

export default App