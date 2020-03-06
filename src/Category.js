import React from 'react';
import './Background.scss';
import { themes } from './randomWords';

export default function Category(props){

    return(

       <div className="main-div">
       <div className="category1">T</div>
       <div className="category2">h</div>
       <div className="category3">e</div>
       <div className="category4">_</div>
       <div className="category2">C</div>
       <div className="category1">a</div>   
       <div className="category3">T</div>
       <div className="category2">e</div>
       <div className="category3">g</div>
       <div className="category1">o</div>
       <div className="category2">r</div>
       <div className="category3">y</div>
       <div className="category4">_</div>
       <div className="category3">I</div>
       <div className="category1">s</div>
       <div className="category2">:</div>
       <div className="category1"> </div>
       {themes.props}
       
       </div>
   )
}