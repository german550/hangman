import React,{useState} from 'react';
import './LetterButton.css'

export default function LetterButton(props){
    const [clicked, setClicked] = useState(false);
    return (
    <button className={clicked ? "clicked" : ""} onClick={() => setClicked(true) }>{props.letter}</button>
    )
}