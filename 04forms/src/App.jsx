
import './App.css'
import AnimatedForm from './components/AnimatedForm'
import ConicGradientForm from './components/ConicGradientForm'
import FloatingInput from './components/FloatingInput'
import FocusInput from './components/FocusInput'
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
      <FocusInput />
      </>
  )
}

export default App
