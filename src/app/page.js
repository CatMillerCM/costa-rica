'use client';

import { useState } from 'react';
import { questionsAndAnswers, resultAnimals } from '@/data';
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
    setSelectedOption('');
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
    setDisableCheckButton(true);
    if (selectedOption === questionsAndAnswers[questionNumber - 1].answer) {
      setCorrectAnswers((prev) => ++prev);
      setResult('correct');
    } else {
      setResult('incorrect');
    }
    setDisableNextButton(false);
  };

  const getResultAnimalData = () => {
    if (correctAnswers <= 3) return resultAnimals.low
    else if (correctAnswers <= 5) return resultAnimals.mid
    else if (correctAnswers <= 7) return resultAnimals.good
    return resultAnimals.excellent
  }

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
        <p>LOGO</p>
        <h2>You scored {correctAnswers}/10</h2>
        <p>{getResultAnimalData().resultIntro}</p>
        <p>You are a {getResultAnimalData().animal}!</p>
        <p>{getResultAnimalData().animalDescription}</p>
        <div className={styles.resultAnimal}></div>
        <button type="button" className={styles.shareButton} onClick={shareResult}>Share My Result</button>
        <button type="button" className={styles.startButton} onClick={restartQuiz}>Retake Quiz</button>
      </main>
    );
  }

  if (questionNumber > 0 && questionNumber <= 10) {
    return (
      <main className={styles.questionPage}>
        <p>LOGO</p>
        <h2>Question {questionNumber}:</h2>
        <h2>{questionsAndAnswers[questionNumber - 1].question}</h2>
        <div className={styles.options}>
          {questionsAndAnswers[questionNumber - 1].options.map((option) => {
            return <button type="button" key={option} className={`${styles.option} ${selectedOption === option ? styles.chosen : ''} ${result === 'correct' && selectedOption === option ? styles.correct : ''} ${result === 'incorrect' && option === questionsAndAnswers[questionNumber - 1].answer ? styles.correct : ''} ${result === 'incorrect' && selectedOption === option ? styles.incorrect : ''}` } onClick={() => selectOption(option)}>{option}</button>
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
