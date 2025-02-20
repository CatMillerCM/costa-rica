import PropTypes from 'prop-types';
import styles from './option.module.css';

const Option = ({ option, selectedOption, result, answer, disabled, onClick  }) => {
  const getClassNames = () => {
    return [
      styles.option,
      selectedOption === option ? styles.chosen : '',
      result === 'correct' && selectedOption === option ? styles.correct : '',
      result === 'incorrect' && option === answer ? styles.correct : '',
      result === 'incorrect' && selectedOption === option ? styles.incorrect : ''
    ].filter(Boolean).join(' ');
  };

  return (
    <button 
      type="button" 
      className={getClassNames()} 
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
