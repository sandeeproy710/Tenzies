import { useState } from 'react'
import Die from './Components/Die'
import { nanoid } from 'nanoid'

function App() {

  const [dice, setDice] = useState(generateNumber())

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

  function generateNumber () {
    return new Array(10).fill(0).map(()=>({
      value: Math.ceil(Math.random()*6), isHeld: false,
      id: nanoid()
    }))
    }
    
    function hold(id) {
      setDice(prev => {
        return prev.map(die => {
          return die.id === id ? {...die, isHeld: !die.isHeld} : die
        })
      })
    }


   const diceElement =dice.map( dieObj => <Die value={dieObj.value} 
    key={dieObj.id} 
    isHeld={dieObj.isHeld}
    hold={hold}
    id={dieObj.id} />)

   function rollDice() {
    setDice(prev => prev.map(die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random()*6)}))
   }
 return (
  <main>
    <h1 className="title">Tenzies</h1>
    <p className="instruction">Roll until all the dice are same. Click each die to freeze it at its current value between rolls</p>
    <div className="dieContainer">
    {diceElement}
    </div>

    <button onClick={rollDice} className="rollDice">
      {gameWon ? "New Game" : "Roll"}
    </button>
    
  </main>
  
 )
}

export default App
