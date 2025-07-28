import './App.css'
import {motion} from "motion/react"

function App() {

  return (
    <>
      <div className='bg-black h-dvh flex justify-center items-center'>
       <motion.div
       initial={{
        x:0,
        y:0
       }}
       animate={{
        x:600,
        y:200
       }}
       className='bg-red-300 border-4 border-green-500'>
        
       </motion.div>
      </div>
    </>
  )
}

export default App
