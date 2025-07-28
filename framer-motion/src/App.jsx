
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
        x:[0, 100, 100, 0,0],
        y:[0, 0, 100, 100, 0]
       }}
       transition={{
        duration:1,
       }}
       className='bg-red-300 border-2 border-green-500'>
        hello
       </motion.div>
      </div>
    </>
  )
}

export default App
