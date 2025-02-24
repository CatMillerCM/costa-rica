'use client';

import { useState } from 'react';
import { End } from '@/components/organisms/end';
import { Question } from '@/components/organisms/question';
import { Start } from '@/components/organisms/start';
import styles from './page.module.css';

const Page = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  if (questionNumber === 0) {
    return (
      <main className={styles.main}>
        <Start 
          setQuestionNumber={setQuestionNumber}
        />
      </main>
    );
  }

  if (questionNumber === 11) {
    return (
      <main className={styles.main}>
        <End 
          setQuestionNumber={setQuestionNumber}
          setCorrectAnswers={setCorrectAnswers}
          correctAnswers={correctAnswers}
        />
      </main>
    );
  }

  if (questionNumber > 0 && questionNumber <= 10) {
    return (
      <main className={styles.main}>
        <Question
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setCorrectAnswers={setCorrectAnswers}
        />
      </main>
    );
  }
}

export default Page;
