import React from 'react'
import Background from "./components/Background.jsx"
import Foreground from './components/Foreground.jsx'

function App() {
  return (
    <>
      <div className='bg-zinc-800 w-full h-screen relative'>
        <Background />
        <Foreground />
      </div>
    </>
  )
}

export default App