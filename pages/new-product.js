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
            <input
              type="number"
              id="price"
              name="price"
              min="0.01"
              step="0.01"
              required />
          </div>
          
          <div className={styles.formRow}>
            <label htmlFor="qty">Quantity (g/bag)</label>
            <input
              type="number"
              id="qty"
              name="qty"
              min="1"
              required />
          </div>
          
          <div className={styles.manageButtons}>
            <button type="submit" className={`${styles.button} ${styles.greenButton}`}>Add product</button>
            <button className={`${styles.button} ${styles.blueButton}`} onClick={(e) => {location.assign('/');}}>Return home</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}