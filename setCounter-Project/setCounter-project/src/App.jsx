import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
   const [counter,setCounter] = useState(0)
    const increaseValue = ()=> {
     setCounter(counter => Math.min(counter + 1,20))
    }
     const decreaseValue = ()=> {
     setCounter(counter => Math.max(counter -1 , 0))
    }

  return (
    <>
       <h1>Count Is {counter}</h1>
       <br/>
       <button onClick={increaseValue} disabled={counter > 20}>Increase Count{counter}</button>
       <br/>
       <button onClick={decreaseValue} disabled={counter < 0}>Decrease Count{counter}</button>
    </>
  )
}

export default App
