import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import styles from '../styles/Home.module.css';
import { getDuration } from '../util';

const Home: NextPage = () => {
  const [clock, setClock] = useState(0);
  useEffect(function clock() {
    const interval = setInterval(() => setClock(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const duration = useMemo(() => {
    return `${getDuration()}❤️`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clock]);

  return (
    <div className={styles.container}>
      <Head>
        <title>With My Love</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{duration}</h1>
      </main>
    </div>
  );
};

export default Home;
