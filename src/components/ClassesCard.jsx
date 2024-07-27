import React from "react";

function ClassesCard(props){
    return(
        <div className="classes-card"> 
            <img src={props.img} alt={props.name} />
            <div className="classes-card-desc">
                <h1>{props.name}</h1>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default ClassesCard;