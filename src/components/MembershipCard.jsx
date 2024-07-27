import React from "react";
import Button from "./Buttons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

function MembershipCard(props){
    return(
        <div className="member-card-container">
            <div className="member-card-desc">
                <h1>{props.name}</h1>
                <h2>{props.price}/<span>{props.period}</span></h2>
                <hr />
                <p><FontAwesomeIcon className="icon" icon={faCircleCheck} />  {props.content1}</p>
                <p><FontAwesomeIcon className="icon" icon={faCircleCheck} />  {props.content2}</p>
                <p><FontAwesomeIcon className="icon" icon={faCircleCheck} />  {props.content3}</p>
                <p><FontAwesomeIcon className="icon" icon={faCircleCheck} />  {props.content4}</p>
                <p><FontAwesomeIcon className="icon" icon={faCircleCheck} />  {props.content5}</p>
                <p><FontAwesomeIcon className="icon" icon={faCircleCheck} />  {props.content6}</p>
                <Button 
                    text={props.btnName}
                />
            </div>            
        </div>
    )
}

export default MembershipCard;