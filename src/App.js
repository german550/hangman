import React, {useState} from 'react';
import './App.css';
import LetterButton from './LetterButton'
import Blank from "./Blank"
import {newCategory, newSecret, themes} from "./randomWords.js"
import Background from "./Background"
import {pictures} from "./Images.js"


function App() {
  const [theme, setTheme] = useState(newCategory(themes))
  const [secret, setSecret] = useState(newSecret(themes[theme]))
  let letters = secret.map(
    (letter) => ({letter: letter, show: false}))
  const [lettersObjects, setLetterObjects] = useState(letters)
  const [count, setCount] = useState(0)
  const row1Letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].map(
    (letter) => <LetterButton letter={letter} checkLetter={() => checkLetter(letter)} />)
  const row2Letters = ["N","O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W", "Z"].map(
    (letter) => <LetterButton letter={letter} checkLetter={() => checkLetter(letter)} />)
  const blanks = lettersObjects.map(
    (ob, i) => <Blank key={i} secret={ob.letter} showMe={ob.show} />)

  function increment() {
    if(count < 8){
      setCount( count + 1)
    }else if (count == 8){
      App()
    }

  function newGame() {
    setTheme(newCategory(themes))
    setSecret(newSecret(themes[theme]))
    let letters = secret.map(
      (letter) => ({letter: letter, show: false})
    )
    setLetterObjects(letters)
  }




  function checkLetter(letter){

    let letra = letter.toLowerCase()
    let letras = lettersObjects.slice()
      if (secret.includes(letra)){
        setLetterObjects(letras.map(
            function(ob) {
              if (letra == ob.letter) {
                  return {letter: letra, show: true}
              }else {
                return ob
              }
            }
          )
        )
      } else{
        increment()
      }
  }



  const row1Letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].map(
    (letter) => <LetterButton letter={letter} checkLetter={() => checkLetter(letter)} />
  )
  const row2Letters = ["N","O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W", "Z"].map(
    (letter) => <LetterButton letter={letter} checkLetter={() => checkLetter(letter)} />)

  const blanks = () => lettersObjects.map(
    (ob, i) => <Blank key={i} secret={ob.letter} showMe={ob.show} />
  )

  return (
    <div className="App">
      <Background />
      <img className="hang" src={zero}/>
      <p></p>

      {row1Letters}
      <p></p>
      {row2Letters}
        <button onClick={()=> newGame()}>New Game</button>
      <p></p>
      <span>The category is: </span>
      <span>{theme}</span>
      <div className="blank-list">
        {blanks()}
      </div>

    </div>
  );
  }

export default App;
