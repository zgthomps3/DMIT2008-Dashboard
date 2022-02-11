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
        <a href="/"><h1 class={styles.logo}><img src="/salt-shaker.svg" alt="" />&nbsp;Sharon's Spices</h1></a>
        <div>
          <img src="/user.svg" alt="Your Profile" />
        </div>
      </header>
      
      <div class={styles.mainContainer}>
        <div class={styles.sidebar}>
          <ul class={styles.sidebarMenu}>
            <li><a href="/new"><img src="/plus.svg" alt="" /> New Product</a></li>
          </ul>
          <div class={styles.sidebarSeparator}></div>
        </div>
        
        <main class={styles.main}>{children}</main>
      </div>
    </div>
  )
}