import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Profile.css";
import { Avatar, Heading, Button } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_SINGLE_USER = gql`
  query {
    user(id: 1) {
      id
      name
      barCount
      bars {
        id
        name
        drinkCount
      }
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_SINGLE_USER);

  if (loading) {
    return <div>Loading your info...</div>;
  }
  if (error) {
    return <div>No User Found! Click the icon above to go back home.</div>;
  }

  const barDrinkCount = data.user.bars.map((drink) => drink.drinkCount);

  return (
    <section className="profile-page">
      <NavBar />
      <article className="profile-info">
        <div className="welcome-user">
          <Avatar
            name="Joe Schmoe"
            src="https://bit.ly/ryan-florence"
            size={"2xl"}
          />
          <Heading as="h2" size="3xl" className="welcome-user-msg">
            Welcome back, {data.user.name}!
          </Heading>
        </div>
        <div className="user-data-container">
          <div className="user-bar-data">
                <Heading as="h3" size="2xl" className="my-bar-info">Bar Status</Heading>
            <div className="user-bar-count">
              <Heading as="h4" size="md" className="num-of-bars">
                <u>Bars</u>
                <br />
                <br/>
              {data.user.barCount}
              </Heading>
            </div>
            <div className="bar-drink-count">
              <Heading as="h4" size="md" className="num-of-drinks">
                <u>Number of Drinks</u>
                <br />
                <br/>
              {barDrinkCount}
              </Heading>
            </div>
            <Link to="/bar/1">
              <Button colorScheme="teal" className="view-bar-btn">View my bar</Button>
            </Link>
          </div>
          <div className="personal-info">
            <div className="my-info-container">
          <Heading as="h3" size="2xl" className="my-info">My Info</Heading>
            </div>
            <p><b>Name:</b> {data.user.name}</p>
            <p><b>Email:</b> JSchmoe23@gmail.com</p>
            <p><b>Location:</b> Denver, CO</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
