import Image from 'next/image';
import hangingSloth from '@/assets/animals/hanging-sloth.png';
import scarletMacaw from '@/assets/animals/scarlet-macaw.png';
import iguana from '@/assets/animals/iguana.png';
import styles from './title.module.css';

const Title = ({  }) => {
  return (
    <div className={styles.container}>
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
      <p className={styles.intro}>Test your knowledge<br></br>and learn more about this country&apos;s famous animals<br></br>in this interactive quiz!</p>
      <Image
        className={styles.iguana}
        src={iguana}
        alt='sloth'
      />
    </div>
  )
};

export { Title };
