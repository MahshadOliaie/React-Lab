import { useEffect, useState } from "react";


function RandomUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(data => setUsers(data.results))

        return () => { };
    }, [])
    console.log(users)
    return (
        users.map((user, index) => {
            return <p key={index}>{user.name.first}</p>
        })
    )

}

export default RandomUsers;