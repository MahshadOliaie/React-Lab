import { useState } from "react";
import './cardPicker.css'


function Card({image , current}){

    return(
        <img src={`/${image}.jpg`} className={current} alt=""/>
    )
}
export default Card;