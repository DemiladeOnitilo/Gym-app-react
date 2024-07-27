import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Classes from "./Classes"
import About from "./About"
import Trainers from "./Trainers"
import Membership from "./Membership"
import Contact from "./Contact"
import {Routes, Route} from "react-router-dom";
import Footer from "./Footer";

function App(){
    return(
        <div>
            <div>          
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    <Route path ="/Classes" element={<Classes />}></Route>
                    <Route path="/Trainers" element={<Trainers />}></Route>
                    <Route path="/Membership" element={<Membership />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                </Routes>
            </div>
            <div>
                <Footer />
                
            </div>
        </div>
    )
}

export default App; 