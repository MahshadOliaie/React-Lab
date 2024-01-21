import { useState } from "react";
import './cardPicker.css'
import Card from "./Card";

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
                            <Card image={item} current={(item == image)&& "current"} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default CardPicker