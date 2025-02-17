import PropTypes from 'prop-types';
import styles from './question-text.module.css';

const QuestionText = ({ questionNumber, question }) => {
  return (
    <div>
      <h3 className={styles.number}>Question {questionNumber}:</h3>
      <h2 className={styles.question}>{question}</h2>
    </div>
  )
};

QuestionText.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
};

export { QuestionText };
