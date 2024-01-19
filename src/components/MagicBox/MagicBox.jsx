import Boxes from "./Boxes"
import './boxes.css'

function MagicBox(){
    return(
        <div className="container">
            {[...new Array(16)].map((item , index) =>{
               return <Boxes key={index}/>
            })}
        </div>
    )
}

export default MagicBox