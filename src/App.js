import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blank from "./Blank"

function App() {
 //
 //  let fruits = ["apple", "orange", "kiwi"];
 //  let cities = ["bogota", "paris", "chicago"]
 //  let colors = ["yellow", "pink", "red", "blue"]
 //
 //  let s = fruits[Math.floor(Math.random()*fruits.length)]
 //
 //  for (var i = 0; i < s.length; i++) {
 //    console.log(s.chartAt(i));
 //  }
 // if s === 0
  // var s = "overpopulation";
  // console.log(s[3]);

  const palabra = "orange"
  return (
    <div className="App">
      <h1 className="hi"></h1>
      <Blank secret={"O"} showMe={true}/>

    </div>
  );
}

export default App;
