import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/ProductManagement.module.css'



export default function NewProduct() {
  
  return (
    <Layout pageName="Add New Product">
      <div className={styles.center}>
        <p>Please enter the product information...</p>
        
        <form action="/api/new-product" method="post">
          <div className={styles.formRow}>
            <label htmlFor="title">Product Name</label>
            <input type="text" id="title" name="title" required />
          </div>
          
          <div className={styles.formRow}>
            <label htmlFor="price">Product Price</label>
            <input type="text" id="price" name="price" required />
          </div>
          
          <div className={styles.formRow}>
            <label htmlFor="qty">Quantity (g/bag)</label>
            <input type="text" id="qty" name="qty" required />
          </div>
          
          <div className={styles.manageButtons}>
            <button type="submit" className={`${styles.button} ${styles.greenButton}`}>Add product</button>
            <Link href="/"><a className={`${styles.button} ${styles.blueButton}`}>Return home</a></Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}