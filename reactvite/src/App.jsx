import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {
 

  return (
    <div style={{border:'10px solid red', height:'300px', width:'300px'}}>
    <h2>ABES Engineering College</h2>
    <h3>Uday Bhardwaj</h3>
    <h4>2400320101193</h4>
    <h4>Computer Science And Engineering</h4>
    <h4>CSE - 28</h4>
    <h5>2024b0101569</h5>
    {/* <ICard roll="12345" name="Uday" branch="CSE" college="ABES Engineering College"/> */}

    </div>
  )
}

export default App
