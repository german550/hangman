import React from 'react';
import logo from './logo.svg';
import './App.css';
import LetterButton from './LetterButton'
const zero= "/images/0.jpg"
const one= "/images/1.jpg"



function App() {
  const row1Letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].map(
    (letter) => <LetterButton letter={letter} />
  )
  const row2Letters = ["N","O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W", "Z"].map(
    (letter) => <LetterButton letter={letter} />
  )

  return (
    <div className="App">
      <img src={one}/>
      <p></p> 
      {row1Letters}
      <p></p>
      {row2Letters}
      <p></p>

    </div>
  );
}

export default App;
