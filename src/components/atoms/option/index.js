import PropTypes from 'prop-types';
import styles from './option.module.css';

// to do - refactor class names here
const Option = ({ option, selectedOption, result, answer, disabled, onClick  }) => {
  return (
    <button 
      type="button" 
      className={`${styles.option} ${selectedOption === option ? styles.chosen : ''} ${result === 'correct' && selectedOption === option ? styles.correct : ''} ${result === 'incorrect' && option === answer ? styles.correct : ''} ${result === 'incorrect' && selectedOption === option ? styles.incorrect : ''}` } 
      disabled={disabled}
      onClick={() => onClick(option)}
    >
      {option}
    </button>
  )
};

Option.propTypes = {
  option: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export { Option };
