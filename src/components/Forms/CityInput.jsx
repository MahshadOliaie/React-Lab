import './form.css'
import cities from './cities.json'
import { useState } from 'react';


function CityInput() {

    const [inputValue, setInputValue] = useState("")
    const [suggested, setSuggested] = useState("")

    function handleChange() {
        let value = event.target.value;
        setInputValue(value)

        setSuggested(cities.find(item => item.startsWith(value)))
    }

    function enterSuggested() {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInputValue(suggested)
        }
    }

    return (
        <div className='city'>
            <input type="text" placeholder='Your City' id='city' value={inputValue} onChange={handleChange} onKeyUp={enterSuggested} />
            <p className="placeholder">{inputValue && suggested}</p>
        </div>
    )
}

export default CityInput;


