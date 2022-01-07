import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import About from '../components/About'
import Education from '../components/Education'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      
      <Navigation />
      <main className={styles.main}>

        <section className={styles.section_wrapper} id='home'>
          <Hero />
        </section>

        <section className={styles.section_wrapper} id='about'>
          <About />
        </section>

        <section className={styles.section_wrapper} id='education'>
          <Education />
        </section>
      </main>

      <footer className={styles.footer} />
    </div>
  )
}
