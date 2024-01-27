import { useState } from 'react';
import './form.css'
import CityInput from './CityInput';


function Form() {

    const [formObj, setFormObj] = useState({ "input1": "", "input2": "", "input3": "", "gender": "", "lang": "" })

    function handleChange() {
        let value = event.target.value;
        let id = event.target.id
        setFormObj({ ...formObj, [id]: value }) //copy the object and override new value
    }


    function handleEnter() {
        if (event.key === 'Enter') {
            if (event.target.id == "input3")
                event.target.nextElementSibling.firstChild.focus()

            else
                event.target.nextElementSibling.focus()
        }
    }

    return (
        <form>
            <input value={formObj.input1} id='input1' type="text" placeholder="Name" className="formName" onChange={handleChange} onKeyUp={handleEnter} />
            <input value={formObj.input2} id='input2' type="text" placeholder="Family" className="formFamily" onChange={handleChange} onKeyUp={handleEnter} />
            <input value={formObj.input3} id='input3' type="number" placeholder="Age" className="formAge" onChange={handleChange} onKeyUp={handleEnter} />
            <CityInput />


            <select name="lang" id="lang" onChange={handleChange}>
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="persian">Persian</option>
            </select>


            <div className='radio'>
                <input type="radio" name="gender" id="gender" value={"Male"} onClick={handleChange} />
                <label htmlFor="student">Male</label>

                <input type="radio" name="gender" id="gender" value={"Female"} onClick={handleChange} />
                <label htmlFor="student">Female</label>
            </div>

            <p className='btn'>DONE</p>
        </form>
    )

}

export default Form;

