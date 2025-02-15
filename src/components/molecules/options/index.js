import PropTypes from 'prop-types';
import { Option } from '@/components/atoms/option';
import styles from './options.module.css';

const Options = ({ options, selectedOption, result, answer, onClick }) => {
  return (
    <div className={styles.options}>
    {options.map((option) => {
      return (
        <Option 
          key={option}
          option={option}
          selectedOption={selectedOption}
          result={result}
          answer={answer}
          onClick={onClick}
        /> 
      )
    })}
  </div>
  )
};

Options.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export { Options };
