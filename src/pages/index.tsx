import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuGallary from 'components/MenuGallary'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>-- C.H.I --</title>
        <meta name="description" content="C.H.I WebPage" />
        <link rel="icon" href="/chi.png" />
      </Head>

      <main className={styles.main}>
        <MenuGallary />
      </main>

      <footer className={styles.footer}>
        <p>&copy; C.H.I All Right Reserved. 2023</p>
      </footer>
    </div>
  )
}

export default Home
