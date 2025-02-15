'use client';

import { useState, useRef } from 'react';
// import html2canvas from 'html2canvas';
import { questionsAndAnswers } from '@/data';
import { Logo } from '@/components/atoms/logo';
import { Title } from '@/components/atoms/title';
import { Button } from '@/components/atoms/button';
import styles from './page.module.css';
import { Result } from '@/components/molecules/result';
import { Answer } from '@/components/atoms/answer';
import { Options } from '@/components/molecules/options';

const Page = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [disableCheckButton, setDisableCheckButton] = useState(true);
  const [disableNextButton, setDisableNextButton] = useState(true);
  const resultRef = useRef(null);

  // const shareResult = async () => {
  //   const canvas = await html2canvas(resultRef.current, { scale: 4 });

  //   canvas.toBlob(async (blob) => {
  //     if (blob && navigator.canShare) {
  //       const file = new File([blob], 'Costa Eu-rica Result.png', { type: 'image/png' });
  //       await navigator.share({ files: [file] });
  //     } else {
  //       alert('Your browser does not support sharing images.');
  //     }
  //   }, 'image/png');
  // }

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

  if (questionNumber === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.startPage}>
          <Title />
          <Button onClick={proceedToNextQuestion} buttonText="Start Quiz"/>
        </div>
      </main>
    );
  }

  if (questionNumber === 11) {
    return (
      <main className={styles.main}>
        <div className={styles.endPage}>
          <div className={styles.shareResult} ref={resultRef}>
            <Logo />
            <Result correctAnswers={correctAnswers} />
          </div>
          {/* <button type="button" className={styles.shareButton} onClick={shareResult}>Share My Result</button> */}
          <Button onClick={restartQuiz} buttonText="Retake Quiz"/>
        </div>
      </main>
    );
  }

  if (questionNumber > 0 && questionNumber <= 10) {
    return (
      <main className={styles.main}>
        <div className={styles.questionPage}>
          <Logo />
          <h2>Question {questionNumber}:</h2>
          <h2>{questionsAndAnswers[questionNumber - 1].question}</h2>
          <Options 
            options={questionsAndAnswers[questionNumber - 1].options}
            selectedOption={selectedOption}
            result={result}
            answer={questionsAndAnswers[questionNumber - 1].answer}
            onClick={selectOption}
          />
          <Button onClick={checkAnswer} disabled={disableCheckButton} buttonText="Check Answer"/>
          {result && <Answer result={result} answer={questionsAndAnswers[questionNumber - 1].answer} />}
          <Button onClick={proceedToNextQuestion} disabled={disableNextButton} buttonText={questionNumber === 10 ? "See My Results" : "Next Question"}/>
        </div>
      </main>
    );
  }
}

export default Page;
