import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(event,params){
    console.log(event);
    document.querySelector('body').style.backgroundColor=params;
  }

  return (
    <>
      <div>
         <button id="red" onClick={event => handleClick(event, 'red')}>Red</button>
         <button id="black" onClick={event => handleClick(event, 'black')}>black</button>
         <button id="orange" onClick={event => handleClick(event, 'orange')}>orange</button>
         <button id="pink" onClick={event => handleClick(event, 'pink')}>pink</button>
         <button id="azure" onClick={event => handleClick(event, 'azure')}>azure</button>
         <button id="green" onClick={event => handleClick(event, 'green')}>green</button>
      </div>
    </>
  )
}

export default App;
