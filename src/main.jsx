import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import { QuizProvider } from './context/quiz.jsx';

const root = document.getElementById('root');
createRoot(root).render(
    <QuizProvider>
        <App />
    </QuizProvider>
);