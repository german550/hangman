import React,{useState} from 'react';
import './LetterButton.scss'
import mp3File from './my-sounds/beep.mp3'
import Fireworks from "./Fireworks.js"

export default function LetterButton(props){
    const [clicked, setClicked] = useState(false);
    
    
    if (props.clear && clicked) {
      setClicked(false)
    }

    function clickIt(){
      let beepsound = new Audio(mp3File)
        beepsound.volume = 1.0
        beepsound.play()

      if (props.count != 8) {
        setClicked(true)
        props.checkLetter()
      }
    }

    return (
    <button className={clicked ? "clicked" : ""} onClick={() => clickIt()}>{props.letter}</button>
  
    )
}
