import React from "react";
import "./css/Module.css"

const Module = (props) => {
    return (
        <figure className="module">
            <img src={props.image} alt="logo"/>
            <figcaption><p className="module-text">{props.name}</p></figcaption>
        </figure>
    )
}

export default Module