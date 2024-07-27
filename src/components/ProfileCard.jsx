import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function ProfileCard(props){
    return(
        <div className="profile-card">
            <img src={props.img} alt={props.name} />
            <div className="profile-card-heading">
                <h1>{props.name}</h1>
                <p>Field: {props.specialty}</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.linkedin.com/login"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;