import { useState } from 'react'
import './boxes.css'

function Boxes() {
    const [bg, setBg] = useState("rgb(100,100,100)")

    function handleClick() {
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let randomColor = `rgb(${red},${green},${blue})`
        setBg(randomColor)
    }

    return (
        <div className="box" style={{ backgroundColor: bg, cursor: 'pointer' }} onClick={handleClick}></div>
    )
}

export default Boxes