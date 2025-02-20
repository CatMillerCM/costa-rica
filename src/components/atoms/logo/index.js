
import Image from 'next/image';
import hangingSloth from '@/assets/animals/hanging-sloth.png';
import scarletMacaw from '@/assets/animals/scarlet-macaw.png';
import styles from './logo.module.css';

const Logo = ({  }) => {
  return (
    <div className={styles.logo}>
      <Image
        className={styles.scarletMacaw}
        src={scarletMacaw}
        alt='scarlet macaw'
      />
      <h1 className={styles.costa}>COSTA</h1>
      <h1 className={styles.rica}>EU&#8209;RICA!</h1>
      <Image
        className={styles.hangingSloth}
        src={hangingSloth}
        alt='sloth'
      />
    </div>
  )
};

export { Logo };
