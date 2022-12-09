import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useUserData } from "../profileHooks";



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
            <h1>Welcome {data.user.name}!</h1>
            <h2>Let's take a look at {data.user.bars[0].name}</h2>
            <h3>You have {data.user.barCount} bars</h3>
            <h4>The {data.user.bars[0].name} has {data.user.bars[0].drinkCount}  drinks</h4>
        </div>
    )
}


export default User;
