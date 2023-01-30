import React from "react";
import "./Resources.css";
import { Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import  NavBar  from '../NavBar/NavBar';

const Resources = () => {
  return (
    <section className="resources">
      <NavBar />
      <div className="resources-container">
        <Heading
          as={"h2"}
          size="4xl"
          className="resource-heading"
          color="#2C7A7B"
        >
          Resources
        </Heading>
        <div className="resource-links">
          <Heading as="h4" size="md" color="#307168" className="link-heading">
            <a
              href="https://pos.toasttab.com/blog/on-the-line/angel-shot#:~:text=What%20is%20an%20Angel%20Shot,because%20of%20another%20guest's%20behavior."
              className="single-resource"
            >
              The Angel Shot Helps Guests Exit Unsafe Situations
            </a>
          </Heading>
          <Heading as="h4" size="md" color="#307168" className="link-heading">
            <a
              href="https://successfulbarsecrets.com/how-to-be-a-good-bartender/basic-bartending-terminology-procedures/"
              className="single-resource"
            >
              Bartender Resources: Basic Bartending Terminology & Procedures
            </a>
          </Heading>
          <Heading as="h4" size="md" color="#307168" className="link-heading">
            <a
              href="https://successfulbarsecrets.com/how-to-be-a-good-bartender/bar-job-interview-tips/"
              className="single-resource"
            >
              Bartender Resource: Bar Job Interview Tips
            </a>
          </Heading>
          <Heading as="h4" size="md" color="#307168" className="link-heading">
            <a
              href="https://successfulbarsecrets.com/how-to-be-a-good-bartender/basic-drink-and-cocktail-recipes/"
              className="single-resource"
            >
              Bartender Resource: Basic Drink And Cocktail Recipes
            </a>
          </Heading>
          <Heading as="h4" size="md" color="#307168" className="link-heading">
            <a
              href="https://www.osha.gov/safety-management"
              className="single-resource"
            >
              Recommended Practices for Safety and Health Programs
            </a>
          </Heading>
        </div>
        <Link to="/">
          <Button
            aria-label="resource page"
            size={"lg"}
            height="65px"
            width="240px"
            color="white"
            bgColor="#37867B"
            _hover={{ background: "#307168" }}
          >
            Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Resources;
