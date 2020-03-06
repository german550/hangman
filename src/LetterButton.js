import React,{useState} from 'react';
import './LetterButton.scss'

export default function LetterButton(props){
    const [clicked, setClicked] = useState(false);
    
    if (props.clear && clicked) {
      setClicked(false)
    }

    function clickIt(){
      if (props.count != 8) {
        setClicked(true)
        props.checkLetter()
      }
    }

    return (
    <button className={clicked ? "clicked" : ""} onClick={() => clickIt() }>{props.letter}</button>


    )
}
