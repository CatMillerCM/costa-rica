import styles from './title.module.css';

const Title = ({  }) => {
  return (
    <div>
      <h1 className={styles.costa}>COSTA</h1>
      <h1 className={styles.rica}>EU&#8209;RICA!</h1>
      <p className={styles.intro}>Test your knowledge and learn more about this country&apos;s famous animals in this interactive quiz!</p>
    </div>
  )
};

export { Title };
