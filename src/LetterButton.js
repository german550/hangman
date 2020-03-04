import React,{useState} from 'react';
import './LetterButton.css'

export default function LetterButton(props){
    const [clicked, setClicked] = useState(false);
    function clickIt(){

      setClicked(true)
      props.checkLetter()
    }

    return (
    <button className={clicked ? "clicked" : ""} onClick={() => clickIt() }>{props.letter}</button>
    
    )
}
