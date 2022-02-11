import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout pageName={"Homepage"}>
      <p>Welcome to our shop! Check out our products:</p>
      
      <div class={styles.productList}>
        <div class={styles.productCard}>
          <div class={styles.productImageContainer}>
            <img src="/placeholder.png" alt="" class={styles.productImage} />
            <div class={styles.productButtons}>
              <a href=""><img src="/pencil.svg" alt="Edit" /></a>
              <a href=""><img src="/trash.svg" alt="Delete" /></a>
            </div>
          </div>
          <p class={styles.productName}>Oregano</p>
          <div>
            <span class={styles.productPrice}>$4.99</span>
            <span class={styles.productQty}>(300g/bag)</span>
          </div>
          <a href="" class={styles.buyButton}>Buy Now</a>
        </div>
        
        <div class={styles.productCard}>
          <div class={styles.productImageContainer}>
            <img src="/placeholder.png" alt="" class={styles.productImage} />
            <div class={styles.productButtons}>
              <a href=""><img src="/pencil.svg" alt="Edit" /></a>
              <a href=""><img src="/trash.svg" alt="Delete" /></a>
            </div>
          </div>
          <p class={styles.productName}>Garlic powder</p>
          <div>
            <span class={styles.productPrice}>$3.99</span>
            <span class={styles.productQty}>(300g/bag)</span>
          </div>
          <a href="" class={styles.buyButton}>Buy Now</a>
        </div>
      </div>
    </Layout>
  )
}
