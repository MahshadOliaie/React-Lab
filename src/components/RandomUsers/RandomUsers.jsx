import { useEffect, useState } from "react";
import User from "./User";
import './randomusers.css'


function RandomUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(data => setUsers(data.results))

        return () => { };
    }, [])

    return (
        <div className="userContainer">{
            users.map((user, index) => {
                return <User data={user} key={index}  />
            })
        }</div>

    )

}

export default RandomUsers;