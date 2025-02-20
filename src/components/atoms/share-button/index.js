'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { toPng } from 'html-to-image';
import styles from './share-button.module.css';

const ShareButton = ({ resultRef, correctAnswers }) => {
  const [stateOfShare, setStateOfShare] = useState('Share My Result');

  const shareResult = async () => {
    setStateOfShare('Preparing...');

    const idsToBeModified = ['score', 'animal', 'description'];

    const elementsToBeModified = idsToBeModified.map((id) => document.getElementById(id));
    const originalTexts = elementsToBeModified.map((el) => el.textContent);
    const modifiedTexts = elementsToBeModified.map((el) => el.textContent.replace(/you are/ig, "I am").replace("Your", "My").replace("your", "my").replace(/you/ig, "I"));
    elementsToBeModified.forEach((el, index) => el.textContent = modifiedTexts[index]);

    try {
      await toPng(resultRef.current);
      await toPng(resultRef.current);
      await toPng(resultRef.current);

      const dataUrl = await toPng(resultRef.current);
      const blob = await fetch(dataUrl).then((res) => res.blob());
  
      if (blob && navigator.canShare) {
        const file = new File([blob], 'Costa Eu-rica Result.png', { type: 'image/png' });

        setStateOfShare('Ready');

        await navigator.share({
          title: "I just finished the Costa Eu-rica Quiz! 🎉",
          text: `I scored ${correctAnswers}/10! Try it yourself at https://costa-rica.cat-miller.com"`,
          files: [file]
        });
      } else {
        alert('Your browser does not support sharing images.');
        setStateOfShare('Could Not Share');
      }
    } catch(error) {
      console.error('Error capturing the result:', error);
      setStateOfShare('Could Not Share');
    } finally {
      elementsToBeModified.forEach((el, index) => el.textContent = originalTexts[index]);
    }
    setStateOfShare('Share My Result');
  };

  return (
    <button 
      type="button"
      className={styles.shareButton}
      onClick={shareResult}
    >
      {stateOfShare}
    </button>

  )
};

ShareButton.propTypes = {
  resultRef: PropTypes.object.isRequired,
  correctAnswers: PropTypes.number.isRequired
};

export { ShareButton };
