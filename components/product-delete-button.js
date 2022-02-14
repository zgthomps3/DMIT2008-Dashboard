import Link from 'next/link'
import styles from '../styles/ProductManagement.module.css'

import '../lib/firebase.js'
import { getDatabase, ref, child, get, remove } from "firebase/database";



export default function ProductDeleteButton( { productKey } ) {
  
  const doDelete = async (e) => {
    const emt = e.target;
    const productKey = emt.attributes.productkey.value;
    
    const dbRef = getDatabase();
    await remove(ref(dbRef, `products/${productKey}`));
    
    location.assign('/');
  }
  
  const emt = <button className={`${styles.button} ${styles.redButton}`} onClick={doDelete} productkey={productKey}>Delete it</button>
  
  return emt;
}
