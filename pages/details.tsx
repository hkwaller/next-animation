import Head from 'next/head'
import styles from '../styles/Details.module.css'
import { useRouter } from 'next/router'


export default function Details() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Unfold</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1>Lost in Tokyo</h1>
          <img src="/tokyo.jpg" alt="Tokyo" className={styles.image} width="70%" />
      </main>
    </div>
  )
}
