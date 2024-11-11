import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className='bg-green-500 text-black p-4 rounded-xl'>Tailwind Test</h1>

  <Card title="Learn React" description="Understand the basics of React and how to build user interfaces." btnText="Click Me" />
    
      <Card title="Master the MERN Stack" description="Dive into MongoDB, Express, React, and Node.js for full-stack development." btnText="Click Me" />
   
      <Card title="Advanced JavaScript" description="Explore advanced JavaScript concepts to improve your coding skills." btnText="Click Me" />

    
    
    
    </>
  )
}

export default App
