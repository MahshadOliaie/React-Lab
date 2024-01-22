import { useState } from "react";
import './cardPicker.css'

const images = ["1", "2", "3", "4"];

function CardPicker() {

    const [image, setImage] = useState("1")

    function select(item) {
        setImage(item)
    }

    return (
        <>
            <div className="container">
                <div className="mainImg">
                    <img src={`/${image}.jpg`} alt="" />
                </div>
                <div className="cardContainer">
                    {images.map(item => {
                        return <div key={item} className="card" onClick={() => select(item)}>
                            <img src={`/${item}.jpg`} className={(item == image) && "current"} alt="" />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default CardPicker