import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'

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

        <section className={styles.section_wrapper} id='experience'>
          <Experience />
        </section>

      </main>

      <footer className={styles.footer} />
    </div>
  )
}
