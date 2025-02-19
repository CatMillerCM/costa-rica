import PropTypes from 'prop-types';
import { toPng } from 'html-to-image';
import styles from './share-button.module.css';

const ShareButton = ({ resultRef }) => {
  const shareResult = async () => {
    const idsToBeModified = ['score', 'animal', 'description'];

    const elementsToBeModified = idsToBeModified.map((id) => document.getElementById(id));
    const originalTexts = elementsToBeModified.map((el) => el.textContent);
    const modifiedTexts = elementsToBeModified.map((el) => el.textContent.replace(/you are/ig, "I am").replace(/you/ig, "I"));
    elementsToBeModified.forEach((el, index) => el.textContent = modifiedTexts[index]);

    try {
      const dataUrl = await toPng(resultRef.current);
      const blob = await fetch(dataUrl).then((res) => res.blob());
  
      if (blob && navigator.canShare) {
        const file = new File([blob], 'Costa Eu-rica Result.png', { type: 'image/png' });
        await navigator.share({ files: [file] });
      } else {
        alert('Your browser does not support sharing images.');
      }
    } catch(error) {
      console.error('Error capturing the result:', error);
    } finally {
      elementsToBeModified.forEach((el, index) => el.textContent = originalTexts[index]);
    }
  };

  return (
    <button 
      type="button"
      className={styles.shareButton}
      onClick={shareResult}
    >
      Share My Result
    </button>

  )
};

ShareButton.propTypes = {
  resultRef: PropTypes.object.isRequired,
};

export { ShareButton };
