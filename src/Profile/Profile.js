import React from "react";
import { useUserData } from "../hooks/profileHooks";
import NavBar from '../NavBar/NavBar'
import './Profile.css'



const User = ({ id }) => {
    const { loading, error, data } = useUserData(id)
    if (loading) {
        return <div>Finding the user...</div>
    }
    if (error) {
        return <div>No User Found</div>
    }
    return (
        <div key={data.user.id}>
            <NavBar className="navigation-bar" />
            <h1 className="users-name">Welcome {data.user.name}!</h1>
            <h3 className="users-barCount">You have {data.user.barCount} bars</h3>
            <div className="users-barInfo">
                <h2 className="users-bar">Let's take a look at {data.user.bars[0].name}!</h2>
                <p className="users-drinkCount">The {data.user.bars[0].name} has {data.user.bars[0].drinkCount}  drinks</p>
            </div>
        </div>
    )
}


export default User;
