import { useState } from 'react';
import './form.css'


function Form() {

    const [formObj, setFormObj] = useState({ "input1": "", "input2": "", "input3": "" , "gender":""})

    function handleChange() {
        let value = event.target.value;
        let id = event.target.id
        setFormObj({ ...formObj, [id]: value }) //copy the object and override new value
    }

    return (
        <form action="">
            <input value={formObj.input1} id='input1' type="text" placeholder="name" className="formName" onChange={handleChange} />
            <input value={formObj.input2} id='input2' type="text" placeholder="family" className="formFamily" onChange={handleChange} />
            <input value={formObj.input3} id='input3' type="number" placeholder="age" className="formAge" onChange={handleChange} />

            <select name="gender" id="gender" onChange={handleChange}>
                <option value="">-- select gender --</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="none">prefer not to say</option>
            </select>
            
            <p>{formObj.gender}</p>
        </form>
    )

}

export default Form;