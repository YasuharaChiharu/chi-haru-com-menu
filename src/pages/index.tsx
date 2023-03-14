import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from 'components/Header'
import MenuGallary from 'components/MenuGallary'
import Title from 'components/Title'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Title />
        <MenuGallary />
      </main>

      <footer className={styles.footer}>
        <p>&copy; C.H.I All Right Reserved. 2023</p>
      </footer>
    </div>
  )
}

export default Home
