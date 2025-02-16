import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import styles from './share-button.module.css';

const ShareButton = ({ resultRef }) => {
  const shareResult = async () => {
    const canvas = await html2canvas(resultRef.current, { scale: 4 });

    canvas.toBlob(async (blob) => {
      if (blob && navigator.canShare) {
        const file = new File([blob], 'Costa Eu-rica Result.png', { type: 'image/png' });
        await navigator.share({ files: [file] });
      } else {
        alert('Your browser does not support sharing images.');
      }
    }, 'image/png');
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
