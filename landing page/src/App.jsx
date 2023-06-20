import { useState } from 'react'
import Header from './Components/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
    
function App() {
  const [count, setCount] = useState(0)

  return (
  <div >
    <Header/>
    <Hero/>
  </div>
  )
}

export default App
