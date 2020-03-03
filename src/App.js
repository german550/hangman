import React from 'react';
import './App.css';
import LetterButton from './LetterButton'
import Blank from "./Blank"
const zero= "/images/0.jpg"
const one= "/images/1.jpg"






function randomTheme(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

function getKey(object, value) {
            for (var prop in object) {
                if (object.hasOwnProperty(prop)) {
                    if (object[prop] === value)
                    return prop;
                }
            }
        }

function App() {
 //

const row1Letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"].map(
  (letter) => <LetterButton letter={letter} />
)
const row2Letters = ["N","O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W", "Z"].map(
  (letter) => <LetterButton letter={letter} />)

   const themes = {fruits: ["apple", "orange", "kiwi", "watermelon", "pineapple", "strawberry"],
                  cities: ["bogota", "paris", "chicago", "lima", "Berlin", "Roma", "London", "Toronto"],
                  colors: ["yellow", "pink", "red", "blue", "green", "Brown", "gray", "orange" ],
                  animals: ["pig", "horse", "cow", "cocodrile", "bird", "monkey", "rabbit", "fox"]}
   //}
  let th = randomTheme(themes)
  let s = th[Math.floor(Math.random()*th.length)]
  let category = getKey(themes,th)
 //
 //  for (var i = 0; i < s.length; i++) {
 //    console.log(s.chartAt(i));
 //  }
 // if s === 0
  // var s = "overpopulation";
  // console.log(s[3]);

  const palabra = s
  let length = palabra.length
  let secret = palabra.split("");
  const blanks = secret.map(
    (letter, i) => <Blank key={i} secret={letter} showMe={false} />
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
