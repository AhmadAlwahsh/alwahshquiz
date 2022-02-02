import React, { useState } from 'react';
import QC from './components/QuestionsCard'
import { fetchQuizQuestions } from './API'
import { QuestionState,Difficulty } from './API'
import { GlobalStyle , Wrapper } from './App.style';

export type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

export function App() {
  
  const [loading, setLoading] = useState(false);
  const [questions , setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);
  

  const startQ = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkA = async (e : React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1)
      
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,

      }
      setUserAnswers(prev => [...prev , answerObject])
    }
  }

  const nextQ = async () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS){
      setGameOver(true);
    } else{
      setNumber(nextQ);
    }
  }

  return (
    <div className='container'>
    <GlobalStyle />
    <Wrapper>
      <h1><a href="https://ahmadalwahsh.netlify.app">Alwahsh</a> Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
              <button className='start' onClick={startQ}>Start</button>
      ): null}
      {!gameOver ? <p className='score'>Score : {score}</p> : null }
      {loading && <p>Loading questions...</p>}
      {!loading && !gameOver &&(
      <QC 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkA}
      />)}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className='next' onClick={nextQ}>Next Question</button>
      ) : null}
    </Wrapper>
    </div>
  );
}
