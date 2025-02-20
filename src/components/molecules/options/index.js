import PropTypes from 'prop-types';
import Image from 'next/image';
import { Option } from '@/components/atoms/option';
import { animalImages } from '@/assets/animals';
import styles from './options.module.css';

const Options = ({ questionData, selectedOption, result, disableOptions, onClick }) => {
  const animaClassname = questionData.animal.replace(/[-\s](.)/g, (_, char) => char.toUpperCase());

  return (
    <div className={styles.container}>
      <Image
        key={questionData.animal}
        className={`${styles.image} ${styles[animaClassname]}`}
        src={animalImages[questionData.animal]}
        alt={questionData.animal}
      />
    <div className={`${styles.options} ${result ? styles.result : ''}`}>
      {questionData.options.map((option) => {
        return (
          <Option 
            key={option}
            option={option}
            selectedOption={selectedOption}
            result={result}
            answer={questionData.answer}
            disabled={disableOptions}
            onClick={onClick}
          /> 
        )
      })}
    </div>
  </div>

  )
};

Options.propTypes = {
  questionData: PropTypes.object.isRequired,
  selectedOption: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  disableOptions: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export { Options };
