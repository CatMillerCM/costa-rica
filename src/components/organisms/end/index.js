import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Logo } from '@/components/atoms/logo';
import { Result } from '@/components/molecules/result';
import { Button } from '@/components/atoms/button';
import { ShareButton } from '@/components/atoms/share-button';
import styles from './end.module.css';

const End = ({ setQuestionNumber, setCorrectAnswers, correctAnswers }) => {
  const resultRef = useRef(null);

  const retakeQuiz = () => {
    setQuestionNumber(0);
    setCorrectAnswers(0);
  };

  return (
    <div className={styles.endPage}>
      <div className={styles.shareResult} ref={resultRef}>
        <Logo />
        <Result
          correctAnswers={correctAnswers}
        />
      </div>
      <ShareButton
        resultRef={resultRef}
      />
      <Button
        onClick={retakeQuiz}
        buttonText="Retake Quiz"
      />
    </div>
  )
};

End.propTypes = {
  setQuestionNumber: PropTypes.func.isRequired,
  setCorrectAnswers: PropTypes.func.isRequired,
  correctAnswers: PropTypes.number.isRequired
};

export { End };
