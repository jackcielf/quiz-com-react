import { createContext, useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <div>Welcome</div>
            <p>Clique no botão para começar:</p>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
                Iniciar
            </button>
            <img src={Quiz} alt="Imagem quiz" />
        </div>
    )
}

export default Welcome;