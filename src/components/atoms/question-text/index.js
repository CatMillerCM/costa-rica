import PropTypes from 'prop-types';
import styles from './question-text.module.css';

const QuestionText = ({ questionNumber, question }) => {
  return (
    <div>
      <h2>Question {questionNumber}:</h2>
      <h2>{question}</h2>
    </div>
  )
};

QuestionText.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
};

export { QuestionText };
