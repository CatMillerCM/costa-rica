import PropTypes from 'prop-types';
import { ResultText } from '@/components/atoms/result-text';
import { ResultImage } from '@/components/atoms/result-image';
import styles from './result.module.css';

const Result = ({ correctAnswers }) => {
  return (
    <div>
      <ResultText
        correctAnswers={correctAnswers}
      />
      <ResultImage />
    </div>
  )
};

ResultText.propTypes = {
  correctAnswers: PropTypes.number.isRequired
};

export { Result };
