import React, { useState } from "react";
import Button from "./Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(){

    const [newsLetter, setNewsLetter] = useState("");

    function handleChange(event){
        setNewsLetter(event.target.value)
    }
    function handleClick(event){
        event.preventDefault();
        setNewsLetter("")
        alert("Sent Succesfully")
    }

    return(
        <div>
             <div className="footer-container">
                <div className="footer-top">

                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-info">
                        <div className="info">
                            <h1><img src="https://i.pinimg.com/originals/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.png" alt="Muscle Man icon" />Muscle<span>Man</span></h1>
                            <p><FontAwesomeIcon icon={faLocationDot} className="icon" />    238 Carol Overpass, Langworthport, MO 77872-9798</p>
                            <p><FontAwesomeIcon icon={faPhone} className="icon" />    Call: +234 1234567890</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="icon" />    Email: musclemangym@gmail.com</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="https://www.linkedin.com/login"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                        <div className="quick-links">
                            <h1>Quick Links</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Classes</li>
                                <li>Trainers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="news-letter">
                            <h1>News Letter</h1>
                            <form onSubmit={handleClick}>
                                <input name="email" onChange={handleChange} placeholder="Enter your email" value={newsLetter}></input>
                                <br />
                                <br />
                                <Button 
                                    text={"Subscribe"}
                                />
                            </form>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Footer;