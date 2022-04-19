import Head from 'next/head'
import { join } from 'path'
import { readdirSync } from 'fs';
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'

import getParsedFileContentBySlug from '../utils/getMdxContent';


export default function Home({ blogs }) {
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
          <Experience blogs={blogs}/>
        </section>

      </main>

      <footer className={styles.footer} />
    </div>
  )
}

const ARTICLE_PATH = join(process.cwd(), process.env.ARTICLE_MARKDOWN_PATH)

export async function getStaticProps() {
  const paths = readdirSync(ARTICLE_PATH)
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => (slug))
  
  const blogs = paths.map(path => getParsedFileContentBySlug(path, ARTICLE_PATH))

  return {
    props: {
      blogs
    }
  }
}