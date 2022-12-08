import React from "react";


const User = ({ users }) => {
    const singleProfile = users.map((profile) => {
        return (
            <div key={profile.id}>
                <h1>Welcome {profile.name}!</h1>
                <h2>Let's take a look at {profile.bars[0].name}</h2>
                <h3>You have {profile.barCount} bars</h3>
                <h4>The {profile.bars[0].name} has {profile.bars[0].drinkCount}  drinks</h4>
            </div>
        )
    })
    return (
        <div className="single-user">
            {singleProfile}
        </div>
    )
}

export default User;
