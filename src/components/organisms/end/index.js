import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Logo } from '@/components/atoms/logo';
import { Result } from '@/components/molecules/result';
import { Button } from '@/components/atoms/button';
import styles from './end.module.css';

const End = ({ setQuestionNumber, correctAnswers }) => {
  const resultRef = useRef(null);

    // const shareResult = async () => {
  //   const canvas = await html2canvas(resultRef.current, { scale: 4 });

  //   canvas.toBlob(async (blob) => {
  //     if (blob && navigator.canShare) {
  //       const file = new File([blob], 'Costa Eu-rica Result.png', { type: 'image/png' });
  //       await navigator.share({ files: [file] });
  //     } else {
  //       alert('Your browser does not support sharing images.');
  //     }
  //   }, 'image/png');
  // }

  return (
    <div className={styles.endPage}>
    <div className={styles.shareResult} ref={resultRef}>
      <Logo />
      <Result correctAnswers={correctAnswers} />
    </div>
    {/* <button type="button" className={styles.shareButton} onClick={shareResult}>Share My Result</button> */}
    <Button onClick={() => setQuestionNumber(0)} buttonText="Retake Quiz"/>
  </div>
  )
};

End.propTypes = {
  setQuestionNumber: PropTypes.func.isRequired,
  correctAnswers: PropTypes.number.isRequired
};

export { End };
