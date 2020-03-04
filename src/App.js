import React, {useState} from 'react';
import './App.css';
import LetterButton from './LetterButton'
import Blank from "./Blank"
import {category, secret} from "./randomWords.js"

//import MatchingBlanks from "./MatchingBlanks"
const zero = "./images/0.jpg"
const one = "./images/1.jpg"
const two = "./images/2.jpg"
const three = "./images/3.jpg"
const four = "./images/4.jpg"
const five = "./images/5.jpg"
const six = "./images/6.jpg"
const seven = "./images/7.jpg"


function App() {
  let letters = secret.map(
    (letter) => ({letter: letter, show: false})
  )
  const [lettersObjects, setLetterObjects] = useState(letters)

  function checkLetter(letter){
    let letra = letter.toLowerCase()
    let letras = lettersObjects.slice()
      if (secret.includes(letra)){
        setLetterObjects(letras.map(
            (ob) => letra === ob.letter ? {letter: letra, show: true} : ob
          )
        )
      } else {
        console.log (2)
      }
  }

  const row1Letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].map(
    (letter) => <LetterButton letter={letter} checkLetter={() => checkLetter(letter)} />
  )
  const row2Letters = ["N","O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W", "Z"].map(
    (letter) => <LetterButton letter={letter} checkLetter={() => checkLetter(letter)} />)

  const blanks = lettersObjects.map(
    (ob, i) => <Blank key={i} secret={ob.letter} showMe={ob.show} />
  )

  return (
    <div className="App">
      <img src={one}/>
      <p></p>
      {row1Letters}
      <p></p>
      {row2Letters}
      <p></p>
      <span>The category is: </span>
      <span>{category}</span>
      <div className="blank-list">
        {blanks}
      </div>

    </div>
  );
  }

export default App;
