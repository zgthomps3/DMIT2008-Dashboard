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
        <Link href="/"><a><h1 className={styles.logo}><Image src="/salt-shaker.svg" width={35} height={35} alt="" />&nbsp;Sharon&#39;s Spices</h1></a></Link>
        <div>
          <Image src="/user.svg" width={40} height={40} alt="Your Profile" />
        </div>
      </header>
      
      <div className={styles.mainContainer}>
        <div className={styles.sidebar}>
          <ul className={styles.sidebarMenu}>
            <li><Link href="/new-product"><a><Image src="/plus.svg" width={20} height={20} alt="" /><span>New Product</span></a></Link></li>
          </ul>
          <div className={styles.sidebarSeparator}></div>
        </div>
        
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
}