import React from "react";
import { useUserData } from "../hooks/profileHooks";
import NavBar from '../NavBar/NavBar'
import './Profile.css'
import logo from "../assets/joes-bar.png";
import { Avatar } from "@chakra-ui/react";

const User = ({ id }) => {
    const { loading, error, data } = useUserData(id)
    if (loading) {
        return <div>Finding the user...</div>
    }
    if (error) {
        return <div>No User Found</div>
    }
    return (
        <div className="user-page" key={data.user.id}>
            <NavBar className="navigation-bar" />
            <div className="welcome-user">
                <title className="users-name">Welcome {data.user.name}!</title>
                <Avatar className="profile-img" name="Joe Schmoe" src="https://bit.ly/code-beast" />
            </div>
            <h3 className="users-barCount">You have {data.user.barCount} bars</h3>
            <div className="users-barInfo">
                <h2 className="users-bar">Let's take a look at {data.user.bars[0].name}!</h2>
                <img className="logo-img" src={logo} alt="joes-bar-logo" width={"30px"} />
                <p className="users-drinkCount">The {data.user.bars[0].name} drink count : {data.user.bars[0].drinkCount}</p>
            </div>
        </div>
    )
}


export default User;
