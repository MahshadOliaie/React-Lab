import { useState } from 'react';
import './randomusers.css'
import Icon from './Icon';

function User(Props) {
    const { picture, name, email, location, dob, phone } = Props.data
    let d = new Date(dob.date)
    let obj = {
        "name": `${name.first} ${name.last}`,
        "email": email,
        "address": `${location.street.number} ${location.street.name} St`,
        "birthday": d.toDateString(),
        "phone": phone,
    }

    const [info, setInfo] = useState({ "title": "name", "apiTitle": obj.name })
    const [svgState, setSvgState] = useState("name")
    
    function handleClick(title) {
        setInfo({ "title": title, "apiTitle": obj[title] })
        setSvgState(title)
    }
    return (
        <>
            <div className="userCard">
                <div className="img"><img src={picture.large} alt="" /></div>
                <div className="about">
                    <p className="title">My <span>{info.title}</span> is</p>
                    <h1 className="titleInfo">{info.apiTitle}</h1>
                </div>
                <div className="icons">
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="name" />
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="email" />
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="address" />
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="birthday" />
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="phone" />
                </div>
            </div>
        </>
    )
}

export default User;