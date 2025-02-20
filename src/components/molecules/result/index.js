import PropTypes from 'prop-types';
import Image from 'next/image';
import { animalImages } from '@/assets/animals';
import { resultAnimals } from '@/data';
import styles from './result.module.css';

const Result = ({ correctAnswers }) => {
  const getResultAnimalData = () => {
    if (correctAnswers <= 3) return resultAnimals.low
    else if (correctAnswers <= 5) return resultAnimals.mid
    else if (correctAnswers <= 7) return resultAnimals.good
    return resultAnimals.excellent
  };

  const resultAnimal = getResultAnimalData().animal;

  return (
    <div className={styles.container}>
      <h2 id="score">You scored {correctAnswers}/10!</h2>
      <p id="animal" className={styles.animal}>You are a {resultAnimal}!</p>
      <p id="description" className={styles.description}>{getResultAnimalData().animalDescription}</p>
      <div className={styles.resultAnimal}>
        <Image
          src={animalImages[resultAnimal]}
          alt={resultAnimal}
        />
      </div>
    </div>
  )
};

Result.propTypes = {
  correctAnswers: PropTypes.number.isRequired
};

export { Result };
