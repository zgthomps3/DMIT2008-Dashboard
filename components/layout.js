import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children, pageName }) {
  return (
    <div class={styles.entirePage}>
      <Head>
        <title>{pageName + " | Service Name"}</title>
      </Head>
      
      <header class={styles.appbar}>
        <div>
          <h1>This is just a global heading</h1>
        </div>
        <div>
          <img src="/user.svg" alt="Your Profile" />
        </div>
      </header>
      
      <div class={styles.mainContainer}>
        <div class={styles.sidebar}>
          <p>This is the sidebar</p>
          <div class={styles.sidebarSeparator}></div>
        </div>
        
        <main class={styles.main}>{children}</main>
      </div>
    </div>
  )
}