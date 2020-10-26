import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
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
        <motion.div className={styles.backgroundImage} layoutId="pic" />
        <motion.button
          className={styles.backButton}
          onClick={() => router.back()}
          animate="pageAnimate"
          initial="pageInitial"
          variants={{
            pageInitial: {
              translateX: -40,
            },
            pageAnimate: {
              translateX: 0,
            },
          }}
        >
          X
        </motion.button>
        <div className={styles.bottom}>
          <div>
            <motion.h1
              className={styles.detailsHeader}
              animate="pageAnimate"
              variants={{
                pageAnimate: {
                  translateY: [40, -10, 0],
                },
              }}
            >
              Lost in Tokyo
            </motion.h1>

            <motion.div
              animate="pageAnimate"
              variants={{
                pageAnimate: {
                  translateY: [20, 0],
                  opacity: [0, 1],
                },
              }}
              style={{ color: "white", marginTop: "1em" }}
            >
              By Jonathan Vik
            </motion.div>
          </div>
          <motion.div
            className={styles.comments}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                translateX: -50,
                opacity: 0,
              },
              pageAnimate: {
                translateX: 0,
                opacity: 1,
              },
            }}
          >
            8
            <img
              src="/comment.svg"
              alt="comments"
              style={{ marginLeft: "0.5em" }}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
