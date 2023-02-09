import React from "react";
import "./css/Description.css"

const Description = () => {
    return (
        <section className="description">
            <h4><span>Description</span></h4>
            <p className="description-text">MotivAItion is a tool to help you increasing your motivation and personnal development using AI.
            <br/>
            Depending on your specific personnality and situation, motivAItion will give you the best advice to become a better human.
            <br/>
            <br/>
            <div className="module-list">
                For now you can choose between 3 modules: 
                <ul>
                <li>Seduction: to help to improve your attractivness and confidence for relationships.</li>
                <li>Upward mobility: to help to improve your capacity of work and try the best investment depending on your situation.</li>
                <li>Sociability: to help you to make connections with new people and socialize more without changing your personnality.</li>
                </ul>
            </div>
            </p>
        </section>
    )
}

export default Description