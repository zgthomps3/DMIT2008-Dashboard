import Link from 'next/link'
import Layout from '../components/layout'
import ProductCard from '../components/product-card'
import ProductDeleteButton from '../components/product-delete-button'
import styles from '../styles/ProductManagement.module.css'

import ReactDOM from 'react-dom'

import { useRouter } from 'next/router'

import '../lib/firebase.js'
import { getDatabase, ref, child, get } from "firebase/database";



function rerenderPage(page) {
  ReactDOM.render(page, document.getElementById('root'));
}



export default function DeleteProduct() {
  const router = useRouter();
  const productKey = router.query.productKey;
  
  if (!productKey) {
    return (
      <Layout pageName={'Delete Product?'}>
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
          <p>Are you sure you want to delete the product?</p>
          <ProductCard productKey={productKey} title={prod.title} imageURL={prod.image} price={prod.price} qty={prod.qty} viewMode="true" />
          <div className={styles.manageButtons}>
            <ProductDeleteButton productKey={productKey} />
            <button className={`${styles.button} ${styles.blueButton}`} onClick={(e) => {location.assign('/');}}>Return home</button>
          </div>
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
    <Layout pageName={'Delete Product?'}>
      <div className={styles.center} id="root">
        <p>Loading product...</p>
      </div>
    </Layout>
  )
}