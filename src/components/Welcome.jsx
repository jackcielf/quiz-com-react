import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from '../_assets/img/quiz.svg';

import "../_assets/css/Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Bem vindo!</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
                Iniciar
            </button>
            <img src={Quiz} alt="Imagem quiz" />
        </div>
    )
}

export default Welcome;