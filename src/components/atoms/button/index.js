import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ onClick, disabled = false, buttonText }) => {
  return (
    <button 
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >{buttonText}</button>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string.isRequired
};

export { Button };
