import React, {useState} from 'react';
import './App.css';
import LetterButton from './LetterButton'
import Blank from "./Blank"
//import MatchingBlanks from "./MatchingBlanks"
import zero from "./images/0.jpg"
import one from "./images/1.jpg"
import {category, secret} from "./randomWords.js"

function App() {
  let letters = secret.map(
    (letter) => ({letter: letter, show: false})
  )
  const [lettersObjects, setLetterObjects] = useState(letters)

  function checkLetter(letter){
    let letra = letter.toLowerCase()
    let letras = lettersObjects.slice()
    setLetterObjects(letras.map(
        (ob) => letra === ob.letter ? {letter: letra, show: true} : ob
      )
    )
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
