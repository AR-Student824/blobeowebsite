import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blobeo - Explore &amp; share videos, images, and GIFs right from Discord!</title>
        <meta name="description" content="Blobeo is a bot that allows you to share and explore tons of cool images and videos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>
        <h1 className={styles.title}>
          Introducing Blobeo
        </h1>

        <p className={styles.description}>
        Share videos, images, and GIFs right from Discord!
        </p>
        <center>
        <button className={styles.button}>Invite</button>
        </center>
</div>
        <div className={styles.grid}>
          <a href="/invite" className={styles.card}>
            <h2>Invite</h2>
            <p>Invite the bot to your server and start using Blobeo today</p>
          </a>

          <a href="//www.blobby.me/premium" className={styles.card}>
            <h2>Premium</h2>
            <p>Learn about the amazing premium perks!</p>
          </a>

          <a
            href="https://discord.gg/windows"
            className={styles.card}
          >
            <h2>Discord server</h2>
            <p>Join the Discord server for a chill community to hang out in, and for support</p>
          </a>

          <a
            href="/#ft"
            className={styles.card}
          >
            <h2>Features</h2>
            <p>
              Learn more about what we have to offer.
            </p>
          </a>
          <Link href="/terms">
          <a
            className={styles.card}
          >
            <h2>Terms of Service</h2>
            <p>
              Read and abide by Blobeo terms at all times.
            </p>
          </a>
          </Link>
          <Link href="/privacy">
          <a
            className={styles.card}
          >
            <h2>Privacy Policy</h2>
            <p>
              Read our Privacy Policy to detirmine how we handle your data.
            </p>
          </a>
          </Link>
        </div>
      </main>

      
    </div>
  )
}
