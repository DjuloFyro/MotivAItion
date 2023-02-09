import React, {useState, useEffect} from "react"
import "./css/Quizz.css"


const questions = [
    "Do you feel attractive?",
    "Do you feel confident?",
    "Do you have a good sens of humor?",
    "Do you have big ambitions?",
    "Are you attentive?"
]

const responses = ["Yes", "A little", "No", "Not at all"];

const Quizz = () => {

    const [index, setIndex] = useState(0);

    var handleClick = (e) => {
        if (index < questions.length)
        {
            setIndex(index + 1);
        }
        else
        {
            // TODO: pop-up loading the final speech
        }
      }
    
    return (
        <div className="quizz-card">
            <div className="quizz-question">
                <p>{questions[index]}<br/><span className="quizz-index">{index}/10</span></p>
            </div>
            <div className="quizz-reponses">
                <div className="main-card">
                    <li className="response-card" onClick={handleClick}>
                        <p>{responses[0]}</p>
                    </li>
                    <li className="response-card" onClick={handleClick}>
                        <p>{responses[1]}</p>
                    </li>
                    <li className="response-card" onClick={handleClick}>
                        <p>{responses[2]}</p>
                    </li>
                    <li className="response-card" onClick={handleClick}>
                        <p>{responses[3]}</p>
                    </li>
                </div>
            </div>

        </div>
    )
}

export default Quizz