import React from "react"
import "./Win.css"
import {win} from "./Images.js"

function Winner(){

    return(
        <div className = "winner">
            <img src={win}/>
        </div>
    )

}




export default Winner