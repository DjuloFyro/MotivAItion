import React from "react";
import Module from "./Module";
import "./css/session.css"

const Session = () => {
    return (
        <div className="session">
            <Module name="Seduction" image="/love.png"/>
            <Module name="Upward Mobility" image="/money-logo.png"/>
            <Module name="Sociability" image="/sociability-logo.png"/>
        </div>
    )
}

export default Session