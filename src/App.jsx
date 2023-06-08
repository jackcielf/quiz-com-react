import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';

import './_assets/css/App.css';

export default function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    // Embaralhar perguntas
    useEffect(() => {
        dispatch({ type: "REORDER_QUESTIONS" });
    }, [])
    

    return (
        <div className='App'>
            <h1>Quiz de Programação</h1>
            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver />}
        </div>
    )
}