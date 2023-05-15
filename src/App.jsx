import { useState } from 'react'
import Console from './Console'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Console />
    </>
  )
}

export default App
