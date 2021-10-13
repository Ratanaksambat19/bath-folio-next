import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <Hero/>
      </main>

      <footer className={styles.footer} />
    </div>
  )
}
