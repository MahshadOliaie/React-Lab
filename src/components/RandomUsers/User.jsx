import './randomusers.css'

function User(Props) {
    const {picture , name} = Props.data
    return (
        <>
            <div className="userCard">
                <div className="img"><img src={picture.large} alt="" /></div>
                <div className="about">
                    <p className="title">My <span>name</span> is</p>
                    <h1 className="titleInfo">{name.first} {name.last}</h1>
                </div>
                <div className="icons"></div>
            </div>
        </>
    )
}

export default User;