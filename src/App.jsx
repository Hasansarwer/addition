import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [resualt, setResualt] = useState('?')

  const handle = (d) => {
    setResualt(d);
    console.log('sum: ',firstNumber, secondNumber);
    console.log('d: ',d);
    if(d === firstNumber+secondNumber){
      alert('Correct')
    }
    else{
      alert('Wrong')
    }
    
  }

  useEffect(() => {
    const first = Math.floor(Math.random() * 10);
    const second = Math.floor(Math.random() * (10 - first));
    setFirstNumber(first);
    setSecondNumber(second);
  }, []);

  return (
    <>
      <div className='frame'>
      <div id="first" className="number">{firstNumber}</div>
      <div  className="op">+</div>
      <div id="second" className="number">{secondNumber}</div>
      <div  className="op">=</div>
      <div className="number">{resualt}</div>
      </div>

      <div className="btn-group">
        <div className="row">
          <button onClick={()=>{handle(1)}}>1</button>
          <button onClick={()=>{handle(2)}}>2</button>
          <button onClick={()=>{handle(3)}}>3</button>
        </div>
        <div className="row">
          <button onClick={()=>{handle(4)}}>4</button>
          <button onClick={()=>{handle(5)}}>5</button>
          <button onClick={()=>{handle(6)}}>6</button>
        </div>
        <div className="row">
          <button onClick={()=>{handle(7)}}>7</button>
          <button onClick={()=>{handle(8)}}>8</button>
          <button onClick={()=>{handle(9)}}>9</button>
        </div>
        <div className="row">
          <button onClick={()=>{handle(0)}}>0</button>
        </div>
        
        </div>
    </>
  )
}

export default App
