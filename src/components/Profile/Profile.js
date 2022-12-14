import React from "react";
import NavBar from '../NavBar/NavBar'
import './Profile.css'
import { Avatar, Heading } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";


const GET_SINGLE_USER = gql`
query {
    user(id: 1) {
      id
      name
      barCount
      bars{
        id
        name
        drinkCount
      }
    }
  }`;

const Profile = () => {
    const { loading, error, data } = useQuery(GET_SINGLE_USER)

    if (loading) {
        return <div>Finding the user...</div>
    }
    if (error) {
        return <div>No User Found</div>
    }

    const userBarCount = data.user.bars.map(drink => drink.drinkCount)

    return (
        <section className="profile-page">
            <NavBar />
            <article className="profile-info">
                <div className="welcome-user">
            <Avatar name="Joe Schmoe" src="https://bit.ly/ryan-florence" size={"xl"} />
                <Heading as="h1" size="4xl" className="welcome-user-msg">
                    Welcome back, {data.user.name}!
                </Heading>

                </div>
                <div className="user-bar-data">
                    <div className="user-bar-count">
                        <Heading as="h3" size="2xl" className="num-of-bars">Bars</Heading>
                        {data.user.barCount}
                    </div>
                    <div className="bar-drink-count">
                        <Heading as="h3" size="2xl" className="num-of-drinks">Number of Drinks</Heading>
                        {userBarCount}
                    </div>
                    <Link to="/bar/1">
                        <button className="view-bar-btn">View my bar</button>
                    </Link>
                </div>
                <div className="user-data">
                    <div className="personal-info">
                        <p>Name: {data.user.name}</p>
                        <p>Email: JSchmoe23@gmail.com</p>
                        <p>Location: Denver, CO</p>
                    </div>
                </div>
            </article>
        </section>
    )
}


export default Profile;


// export const useUserData = (id) => {

//     const { loading, error, data } = useQuery(GET_SINGLE_USER, {
//         variables: {
//             id,
//         }
//     })
//     return { data, error, loading };
// };