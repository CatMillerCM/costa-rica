import PropTypes from 'prop-types';
import styles from './answer.module.css';

const Answer = ({ result, answer }) => {
  return (
    <div className={styles.answer}>
      <p>That is {result}!</p>
      <p>{result === 'correct' ? 'Well done!' : 'The correct answer is:'}</p>
      {result === 'incorrect' && <p>{answer}</p>}
    </div>
  )
};

Answer.propTypes = {
  result: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export { Answer };
