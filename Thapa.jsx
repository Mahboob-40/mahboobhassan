import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./ThapaHome";
import Contact from "./ThapaContact";
import About from "./ThapaAbout";
import Service from "./ThapaService";
import Navbar from "./ThapaNavbar";
import Footer from "./ThapaFooter";
import { Route, Routes, Navigate } from "react-router-dom";

const Thapa = () =>{
    return(
        <> 
           <Navbar />
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="*" element={<Navigate to="/" />} />
           </Routes>   
           <Footer />
        </>
    )
}

export default Thapa;