import PropTypes from 'prop-types';
import styles from './answer.module.css';

const Answer = ({ result, answer }) => {
  return (
    <div>
      <p>That is {result}!</p>
      <p>{result === 'correct' ? 'Well done!' : `The correct answer was ${answer}.`}</p>
    </div>
  )
};

Answer.propTypes = {
  result: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export { Answer };
