import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unfold</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <span><strong>Shared</strong> by you</span>
          <h1>Lost in Tokyo</h1>
          <img src="/tokyo.jpg" alt="Tokyo" className={styles.image} width="70%" />
          <div className={styles.description}>Danish fontina cheesy feet manchego. Chalk and cheese say cheese cauliflower cheese melted cheese fromage halloumi lancashire who moved my cheese. </div>
          <button className={styles.button}>
            <img src="/arrows.svg" alt="arrows" />
          </button>
      </main>
    </div>
  )
}
