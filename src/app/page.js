'use client';

import { useState } from 'react';
import styles from './page.module.css';

const Page = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [result, setResult] = useState(null);
  let correctAnswers = 0;

  const shareResult = () => {
    console.log('sharing result')
  }

  const proceedToNextQuestion = () => {
    setQuestionNumber((prev) => ++prev);
    setResult(null);
  }

  const restartQuiz = () => {
    setQuestionNumber(0);
  };

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const checkAnswer = () => {
    if (selectedAnswer === 'B') {
      correctAnswers++;
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  if (questionNumber === 0) {
    return (
      <main className={styles.startPage}>
        <h1 className={styles.costa}>Costa</h1>
        <h1 className={styles.rica}>Eu-rica!</h1>
        <h3 className={styles.intro}>Test your knowledge and learn more about this country&apos;s famous animals in this interactive quiz!</h3>
        <button type="button" className={styles.startButton} onClick={proceedToNextQuestion}>Start Quiz</button>
      </main>
    );
  }

  if (questionNumber === 2) {
    return (
      <main className={styles.endPage}>
        <h2>You scored {correctAnswers}/10</h2>
        <p>Nice work!</p>
        <p>Youre a jaguar!</p>
        <p>Stealthy and intelligent, you know your stuff....</p>
        <div className={styles.resultAnimal}></div>
        <button type="button" className={styles.shareButtom} onClick={shareResult}>Share My Result</button>
        <button type="button" className={styles.startButton} onClick={restartQuiz}>Retake Quiz</button>
      </main>
    );
  }

  if (questionNumber > 0 && questionNumber < 2) {
    return (
      <main className={styles.questionPage}>
        <h2>Question {questionNumber}:</h2>
        <h2>What is the question?</h2>
        <div className={styles.answerOptions}>
          <button type="button" className={styles.answerOption} onClick={() => selectAnswer('A')}>A</button>
          <button type="button" className={styles.answerOption} onClick={() => selectAnswer('B')}>B</button>
          <button type="button" className={styles.answerOption} onClick={() => selectAnswer('C')}>C</button>
          <button type="button" className={styles.answerOption} onClick={() => selectAnswer('D')}>D</button>
        </div>
        <button type="submit" className={styles.submitButton} onClick={checkAnswer}>Check Answer</button>
        {result && <div>
          <p>That is {result}!</p>
          <p>{result === 'correct' ? 'Well done!' : 'The correct answer was B.'}</p>
        </div>}
        <button type="button" className={styles.startButton} onClick={proceedToNextQuestion}>Next Question</button>
      </main>
    );
  }
}

export default Page;
