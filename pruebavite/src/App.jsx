import { useState } from 'react'
import ponti from '/icons8-python.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={ponti} alt="" />
      <p>hola</p>
    </>
  )
}

export default App
