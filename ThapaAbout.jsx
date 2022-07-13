import React from "react";
import Common from "./ThapaCommon";
import about from "../src/images/about.png";

const About = () =>{
    return(
        <>
            <Common name="Welcome to About page" imgsrc={about} visit="/contact" btname="Contact Now" />
        </>
    )
}

export default About;