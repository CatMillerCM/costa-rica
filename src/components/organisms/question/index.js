import PropTypes from 'prop-types';
import { useState } from 'react';
import { questionsAndAnswers } from '@/data';
import { Logo } from '@/components/atoms/logo';
import { Answer } from '@/components/atoms/answer';
import { Options } from '@/components/molecules/options';
import { QuestionText } from '@/components/atoms/question-text';
import { Button } from '@/components/atoms/button';
import styles from './question.module.css';

const Question = ({ questionNumber, setQuestionNumber, setCorrectAnswers }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState(null);
  const [disableCheckButton, setDisableCheckButton] = useState(true);
  const [disableNextButton, setDisableNextButton] = useState(true);

  const proceedToNextQuestion = () => {
    setQuestionNumber((prev) => ++prev);
    setSelectedOption('');
    setResult(null);
    setDisableCheckButton(true);
    setDisableNextButton(true);
  }

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

  return (
    <div className={styles.questionPage}>
      <Logo />
      <QuestionText
        questionNumber={questionNumber}
        question={questionsAndAnswers[questionNumber - 1].question}
      />
      <Options 
        questionData={questionsAndAnswers[questionNumber - 1]}
        selectedOption={selectedOption}
        result={result}
        onClick={selectOption}
      />
      {result &&
        <Answer
          result={result}
          answer={questionsAndAnswers[questionNumber - 1].answer}
        />
      }
      <Button
        onClick={checkAnswer}
        disabled={disableCheckButton}
        buttonText="Check Answer"
      />
      <Button
        onClick={proceedToNextQuestion}
        disabled={disableNextButton}
        buttonText={questionNumber === 10 ? "See My Results" : "Next Question"}
      />
    </div>
  )
};

Question.propTypes = {
  questionNumber:  PropTypes.number.isRequired,
  setQuestionNumber: PropTypes.func.isRequired,
  setCorrectAnswers: PropTypes.func.isRequired
};

export { Question };
