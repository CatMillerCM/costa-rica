import PropTypes from 'prop-types';
import { Title } from '@/components/atoms/title';
import { Button } from '@/components/atoms/button';
import styles from './start.module.css';

const Start = ({ setQuestionNumber }) => {
  const startQuiz = () => {
    setQuestionNumber((prev) => ++prev);
  };

  return (
    <div className={styles.startPage}>
      <Title />
      <Button onClick={startQuiz} buttonText="Start Quiz"/>
    </div>
  )
};

Start.propTypes = {
  setQuestionNumber: PropTypes.func.isRequired
};

export { Start };
