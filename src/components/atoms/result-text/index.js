import PropTypes from 'prop-types';
import { resultAnimals } from '@/data';
import styles from './result-text.module.css';

const ResultText = ({ correctAnswers }) => {
  const getResultAnimalData = () => {
    if (correctAnswers <= 3) return resultAnimals.low
    else if (correctAnswers <= 5) return resultAnimals.mid
    else if (correctAnswers <= 7) return resultAnimals.good
    return resultAnimals.excellent
  }

  return (
    <div>
      <h2>You scored {correctAnswers}/10</h2>
      <p>{getResultAnimalData().resultIntro}</p>
      <p>You are a {getResultAnimalData().animal}!</p>
      <p>{getResultAnimalData().animalDescription}</p>
    </div>
  )
};

ResultText.propTypes = {
  correctAnswers: PropTypes.number.isRequired
};

export { ResultText };
