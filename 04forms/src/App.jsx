
import './App.css'
import AnimatedForm from './components/AnimatedForm'
import ConicGradientForm from './components/ConicGradientForm'
import FloatingInput from './components/FloatingInput'
import FocusInput from './components/FocusInput'
import MovingConicGradientForm from './components/MovingConicGraadientForm'
import NewAnimatedForm from './components/NewAnimatedForm'
import RadialGradientForm from './components/RadialGradientForm'

function App() {

  return (
    <>
      <FloatingInput />
      <AnimatedForm />
      <NewAnimatedForm />
      <ConicGradientForm />
      <RadialGradientForm />
      <MovingConicGradientForm />
      <FocusInput />
      </>
  )
}

export default App
