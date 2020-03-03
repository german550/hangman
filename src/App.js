import React from 'react';
import './App.css';
import Blank from "./Blank"

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
      <span>The category is: </span>
      <span>{category}</span>
      <div className="blank-list">
        {blanks}
      </div>

    </div>
  );
}

export default App;
