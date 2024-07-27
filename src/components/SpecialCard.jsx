import React from "react";

function SpecialCard(props){
    return(
            <div className="special-card">
                    <img src={props.img} alt={props.name} />
                <div className="special-card-desc">
                    <h3>{props.name}</h3> 
                    <p>{props.content}</p>
                </div>           
            </div>
    )
}

export default SpecialCard;