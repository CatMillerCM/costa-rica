import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './button.module.css';

const Button = ({ onClick, disabled = false, buttonText }) => {
  return (
    <Link href='/'>
      <button 
        type="button"
        className={styles.button}
        onClick={onClick}
        disabled={disabled}
      >{buttonText}</button>
    </Link>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  buttonText: PropTypes.string.isRequired
};

export { Button };
