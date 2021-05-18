import React from "react";

function Card({...props}) {
    return (
         <picture className="click-item" data-id={props.id} style={{ backgroundImage: `url(${props.image})` }} onClick={(e) => props.onclick(e)}/>
    );
}

export default Card;
