import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../styles/Details.module.css";

export default function Details() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Unfold</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div
          className={styles.s}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              scale: 0.5,
            },
            pageAnimate: {
              scale: 1,
            },
            pageExit: {
              scale: 0.7,
            },
          }}
        />
        <button className={styles.backButton} onClick={() => router.back()}>
          X
        </button>
        <div className={styles.bottom}>
          <div>
            <motion.h1
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  translateY: 20,
                },
                pageAnimate: {
                  translateY: 0,
                },
              }}
              style={{ color: "white" }}
            >
              Lost in Tokyo
            </motion.h1>

            <motion.div
              initial="pageInitial"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  translateY: 10,
                  opacity: 0,
                },
                pageAnimate: {
                  translateY: 0,
                  opacity: 1,
                },
              }}
              style={{ color: "white" }}
            >
              By Jonathan Vik
            </motion.div>
          </div>
          <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                translateX: -20,
                opacity: 0,
              },
              pageAnimate: {
                translateX: 0,
                opacity: 1,
              },
            }}
            style={{ color: "white" }}
          >
            8 œ
          </motion.div>
        </div>
      </main>
    </div>
  );
}
