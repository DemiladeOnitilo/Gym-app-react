import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from "./Buttons";

function Contact(){

    const [form, setForm] =useState({
        name:"",
        email:"",
        subject:"",
        message:"",
        submit:""
});

    function handleChange(event){
        setForm(event.target.value)
    }

    function handleClick(event){
        event.preventDefault();
        setForm({
            name:"",
            email:"",
            subject:"",
            message:"",
            submit:"Sent Successfully"
        });
    }
    

    return (
        <div>
            <div className="contact-heading">
                <h1>CONTACT <span>US</span></h1>
            </div>
            <div className="contact">
                <div className="contact-info">
                    <h2>GET IN <span>TOUCH</span></h2>
                    <p><FontAwesomeIcon icon={faLocationDot} className="icon" />    238 Carol Overpass, Langworthport, MO 77872-9798</p>
                    <p><FontAwesomeIcon icon={faPhone} className="icon" />     +234 1234567890</p>
                    <p><FontAwesomeIcon icon={faEnvelope} className="icon" />    musclemangym@gmail.com</p>                    
                </div>
                <div className="contact-msg">
                    <h2>SEND US A <span>MESSAGE</span></h2>
                    <form onSubmit={handleClick}>
                    <input onChange={handleChange} type="text" name="name" placeholder="Name..." className="regular-input" value={form.name}/>
                    <input onChange={handleChange} type="email" name="email" placeholder="Email.." className="regular-input" value={form.email} />
                    <input onChange={handleChange} type="text" name="subject" placeholder="Subject.." className="regular-input" value={form.subject} />
                    <input onChange={handleChange} type="text" name="message" placeholder="Message..." className="wide-input" value={form.message}/>
                    <p>{form.submit}</p>
                    <Button 
                        text={"SUBMIT"}
                    />
                    </form>
                </div>
            </div>
            <div className="contact-end">
                <h1>
                    BECOME A 
                    <br />
                    <span>MEMBER</span>
                </h1>
                <Button 
                    text={"JOIN US"}
                />
            </div>
        </div>
    )
}

export default Contact;