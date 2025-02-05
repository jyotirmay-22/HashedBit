import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IplTable from "./IplTable";  // Import the component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <IplTable />
      </div>
    </>
  )
}

export default App
