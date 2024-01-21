import { useState } from "react";
import './cardPicker.css'

const images = ["1", "2", "3", "4"];

function CardPicker() {

    const [image , setImage] = useState("/1.jpg")

    function select(image){
        setImage(`/${image}.jpg`)
    }

    return (
        <>
            <div className="container">
                <div className="mainImg">
                    <img src={image} alt="" />
                </div>
                <div className="cardContainer">
                    {images.map(image => {
                        return <div key={image} className="card" onClick={() => select(image)}>
                            <img src={`/${image}.jpg`} alt="" />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default CardPicker