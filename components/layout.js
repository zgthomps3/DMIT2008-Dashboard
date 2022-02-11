import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children, pageName }) {
  return (
    <div className={styles.entirePage}>
      <Head>
        <title>{pageName + " | Sharon's Spices"}</title>
      </Head>
      
      <header className={styles.appbar}>
        <a href="/"><h1 className={styles.logo}><img src="/salt-shaker.svg" alt="" />&nbsp;Sharon's Spices</h1></a>
        <div>
          <img src="/user.svg" alt="Your Profile" />
        </div>
      </header>
      
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>
          <ul className={styles.sidebarMenu}>
            <li><a href="/new"><img src="/plus.svg" alt="" /> New Product</a></li>
          </ul>
          <div className={styles.sidebarSeparator}></div>
        </div>
        
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}