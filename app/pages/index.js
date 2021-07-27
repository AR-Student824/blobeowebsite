import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Typed from 'typed.js';
import { useEffect, useState } from 'react';



export default function Home() {
  useEffect(() => {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      startdelay: 1000,
      typeSpeed: 100,
      backDelay: 500,
      backSpeed: 100
    });
  }, [])
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Blobeo - Explore &amp; share videos, images, and GIFs right from Discord!</title>
        <meta name="description" content="Blobeo is a bot that allows you to share and explore tons of cool images and videos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}  style={{backgroundColor: "#121212"}}>
      <nav style={{backgroundColor: "#121212 !important"}} className="navbar navbar-expand-lg navbar-dark">
  <a style={{backgroundColor: "#121212"}} className="navbar-brand" href="#">Blobeo</a>
</nav>
        <div className={styles.top}>
        <h1 className={styles.title}>
          Introducing <span id="typed">Blobeo</span>
        </h1>
        <div id="typed-strings" style={{display: "none"}}>
          <h1>Blobeo</h1>
          <h1>a new way to share</h1>
          <h1>a new way to explore</h1>
          <h1>a unique new bot for Discord</h1>
          <h1>Blobeo</h1>

        </div>

        <p className={styles.description}>
        Share videos, images, and GIFs right from Discord!
        </p>
        <center>
        <Link href="/invite">
        <button className={styles.button}>Invite</button>
        </Link>
        </center>
</div>
        <div className={styles.grid}>
          <Link href="/invite">
          <a className={styles.card}>
            <h2>Invite</h2>
            <p>Invite the bot to your server and start using Blobeo today</p>
          </a>
          </Link>

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
