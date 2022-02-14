import Link from 'next/link'
import Layout from '../components/layout'
import ProductCard from '../components/product-card'
import styles from '../styles/ProductManagement.module.css'

import ReactDOM from 'react-dom'

import { useRouter } from 'next/router'

import '../lib/firebase.js'
import { getDatabase, ref, child, get } from "firebase/database";



function rerenderPage(page) {
  ReactDOM.render(page, document.getElementById('root'));
}



export default function EditProduct() {
  const router = useRouter();
  const productKey = router.query.productKey;
  
  if (!productKey) {
    return (
      <Layout pageName={'Edit Product'}>
        <div className={styles.center}>
          <p>No product key was specified.</p>
          <button className={`${styles.button} ${styles.blueButton} ${styles.center}`} onClick={(e) => {location.assign('/');}}>Return home</button>
        </div>
      </Layout>
    )
  }
  
  const dbRef = ref(getDatabase());
  get(child(dbRef, `products/${productKey}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const prod = snapshot.val();
      rerenderPage(
        <div>
          <p>Please enter the product information...</p>
          
          <form action="/api/edit-product" method="post">
            <div className={styles.invisible}>
              <input type="text" id="key" name="key" value={productKey} />
              <input type="text" id="sku" name="sku" value={prod.sku} />
            </div>
            
            <div className={styles.formRow}>
              <label htmlFor="title">Product Name</label>
              <input type="text" id="title" name="title" defaultValue={prod.title} required />
            </div>
            
            <div className={styles.formRow}>
              <label htmlFor="price">Product Price</label>
              <input
                type="number"
                id="price"
                name="price"
                min="0.01"
                step="0.01"
                defaultValue={prod.price / 100}
                required />
            </div>
            
            <div className={styles.formRow}>
              <label htmlFor="qty">Quantity (g/bag)</label>
              <input
                type="number"
                id="qty"
                name="qty"
                min="1"
                defaultValue={prod.qty}
                required />
            </div>
            
            <div className={styles.manageButtons}>
              <button type="submit" className={`${styles.button} ${styles.greenButton}`}>Edit product</button>
              <button className={`${styles.button} ${styles.blueButton}`} onClick={(e) => {location.assign('/');}}>Return home</button>
            </div>
          </form>
        </div>
      );
    } else {
      rerenderPage(
        <div>
          <p>Product with key &quot;{productKey}&quot; does not exist in the database.</p>
          <button className={`${styles.button} ${styles.blueButton} ${styles.center}`} onClick={(e) => {location.assign('/');}}>Return home</button>
        </div>
      );
    }
  }).catch((error) => {
    rerenderPage(
      <div>
        <p>Error retrieving product: {error}</p>
        <button className={`${styles.button} ${styles.blueButton} ${styles.center}`} onClick={(e) => {location.assign('/');}}>Return home</button>
      </div>
    )
  });
  
  return (
    <Layout pageName={'Edit Product'}>
      <div className={styles.center} id="root">
        <p>Loading product...</p>
      </div>
    </Layout>
  )
}