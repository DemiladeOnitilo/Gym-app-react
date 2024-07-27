import React, {useState} from "react";
import {NavLink, useMatch, useResolvedPath} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    function onClick(event){
        window.location.replace();
        event.preventDefault();
    }

    function CustomLink({to, children, ...props }){
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true})
        return(
            <li className={isActive ? "active" : ""}>
                <NavLink onClick={onClick} to={to} {...props}>
                    {children}
                </NavLink>
            </li>
        )
    }

    const [bar, setBar] = useState(false)    

    function handleClick(){
        setBar(!bar)
    }


    return(
        <nav className="nav-bar">
            <NavLink onClick={onClick} to="/" className="site-title"><img src="https://i.pinimg.com/originals/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.png" alt="Muscle Man icon" />Muscle <span>Man</span></NavLink>
            <div>
            <ul id="nav-link" className={bar ? "nav-bar active" : "nav-bar ul"}>
                <CustomLink to="/About">About</CustomLink>
                <CustomLink to="/Classes">Classes</CustomLink>
                <CustomLink to="/Trainers">Trainers</CustomLink>
                <CustomLink to="/Membership">Membership</CustomLink>
                <CustomLink to="/Contact">Contact</CustomLink>
            </ul>
            </div>
            <div id="mobile" onClick={handleClick} >
                <FontAwesomeIcon icon={bar ? faXmark : faBars} id="bar"/>
            </div>
        </nav>
    )
}

export default NavBar