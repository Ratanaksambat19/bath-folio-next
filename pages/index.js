import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Create Next App</title>
       
      </Head>
        <Navigation/>
      <main className={styles.main}>
        <Hero/>
      </main>

      <footer className={styles.footer} />
    </div>
  )
}
