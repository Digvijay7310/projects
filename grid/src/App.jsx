import { useState } from "react"
import {motion, AnimatePresence} from "framer-motion"
import "../src/App.css"
function App() {
  const [showOthers, setShowOther] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const toggleVisibility = () => {
    setShowOther((prev) => !prev)
    setIsClick((prev) => !prev)
  }
   // Animation variants for each box
  // const boxVariants = {
  //   hidden: { opacity: 0, scale: 0.5 },
  //   visible: { opacity: 1, scale: 1 },
  //   exit: { opacity: 0, scale: 0.5 },
  // }
    const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 },
    },
  }

  return (

    <div className="flex justify-center items-center gap-1">
       <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 gap-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={`box-${i}`}
            className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 ${
              showOthers ? "opacity-100 scale-100 bg-yellow-600" : "opacity-0 scale-0 bg-transparent"
            }`}
          >
          </div>
        ))}

        {/* Fifth box - button */}
        <button
          type="button"
          onClick={toggleVisibility}
          className={` rounded-lg h-[100px] w-[100px] bg-red-300 ${isClick ? "transition-shadow duration-300 bg-red-600 ": "transition-shadow duration-300 "}` }
        >
          This is fifth div
        </button>

        {[...Array(4)].map((_, i) => (
          <div
            key={`box-${i + 4}`}
            className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 ${
              showOthers ? "opacity-100 scale-100 bg-yellow-600" : "opacity-0 scale-0 bg-transparent"
            }`}
          >
          </div>
        ))}
      </div>
    </div>

     <div className="hidden grid-cols-3 gap-2">
        {/* First 4 boxes */}
        {[...Array(4)].map((_, i) => (
          <AnimatePresence key={`top-${i}`}>
            {showOthers ? (
              <motion.div
                key={`top-box-${i}`}
                className="h-[100px] w-[100px] rounded-lg bg-yellow-600 flex items-center justify-center text-white font-bold"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={boxVariants}
                transition={{ duration: 0.2 }}
              >
                h
              </motion.div>
            ) : (
              <div className="h-[100px] w-[100px]" />
            )}
          </AnimatePresence>
        ))}

        {/* Center Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={toggleVisibility}
          className="h-[100px] w-[100px] rounded-lg bg-amber-400 font-semibold text-center"
        >
          Toggle
        </motion.button>

        {/* Last 4 boxes */}
        {[...Array(4)].map((_, i) => (
          <AnimatePresence key={`bottom-${i}`}>
            {showOthers ? (
              <motion.div
                key={`bottom-box-${i}`}
                className="h-[100px] w-[100px] rounded-lg bg-yellow-600 flex items-center justify-center text-white font-bold"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={boxVariants}
                transition={{ duration: 0.4 }}
              >
                h
              </motion.div>
            ) : (
              <div className="h-[100px] w-[100px]" />
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>




   /* <div className=" flex justify-center items-center ">
    <div className="grid grid-cols-3 gap-1 ">
      <div className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 bg-yellow-600 ${showOthers ? "block" : "hidden"}`}>h</div>
      <div className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 bg-yellow-600 ${showOthers ? "block" : "hidden"}`}>h</div>
      <div className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 bg-yellow-600 ${showOthers ? "block" : "hidden"}`}>h</div>
      <div className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 bg-yellow-600 ${showOthers ? "block" : "hidden"}`}>h</div>
      <button type="button" onClick={toggleVisibility} className="top-10 h-[100px] w-[100px] rounded-lg bg-amber-300">This is fifth div</button>
      <div className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 bg-yellow-600 ${showOthers ? "block" : "hidden"}`}>h</div>
      <div className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 bg-yellow-600 ${showOthers ? "block" : "hidden"}`}>h</div>
      <div className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 bg-yellow-600 ${showOthers ? "block" : "hidden"}`}>h</div>
      <div className={`h-[100px] w-[100px] rounded-lg transition-all duration-300 bg-yellow-600 ${showOthers ? "block" : "hidden"}`}>h</div>
    </div>
    </div> */
  )
}

export default App
