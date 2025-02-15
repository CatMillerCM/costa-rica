'use client';

import { useState } from 'react';
import { questionsAndAnswers } from '@/data';
import styles from './page.module.css';

const Page = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [disableCheckButton, setDisableCheckButton] = useState(true);
  const [disableNextButton, setDisableNextButton] = useState(true);

  const shareResult = () => {
    console.log('sharing result')
  }

  const proceedToNextQuestion = () => {
    setQuestionNumber((prev) => ++prev);
    setResult(null);
    setDisableCheckButton(true);
    setDisableNextButton(true);
  }

  const restartQuiz = () => {
    setQuestionNumber(0);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDisableCheckButton(false);
  };

  const checkAnswer = () => {
    if (selectedOption === questionsAndAnswers[questionNumber - 1].answer) {
      setCorrectAnswers((prev) => ++prev);
      setResult('correct');
    } else {
      setResult('incorrect');
    }
    setDisableNextButton(false);
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

  if (questionNumber === 11) {
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

  if (questionNumber > 0 && questionNumber <= 10) {
    return (
      <main className={styles.questionPage}>
        <h2>Question {questionNumber}:</h2>
        <h2>{questionsAndAnswers[questionNumber - 1].question}</h2>
        <div className={styles.answerOptions}>
          {questionsAndAnswers[questionNumber - 1].options.map((option) => {
            return <button type="button" key={option} className={styles.option} onClick={() => selectOption(option)}>{option}</button>
          })}
        </div>
        <button type="submit" className={styles.submitButton} onClick={checkAnswer} disabled={disableCheckButton}>Check Answer</button>
        {result && <div>
          <p>That is {result}!</p>
          <p>{result === 'correct' ? 'Well done!' : `The correct answer was ${questionsAndAnswers[questionNumber - 1].answer}.`}</p>
        </div>}
        <button type="button" className={styles.startButton} onClick={proceedToNextQuestion} disabled={disableNextButton}>Next Question</button>
      </main>
    );
  }
}

export default Page;
