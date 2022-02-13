import Link from 'next/link'
import styles from '../styles/ProductManagement.module.css'

import '../lib/firebase.js'
import { getDatabase, ref, child, get, remove } from "firebase/database";



export default function ProductDeleteButton( { productKey } ) {
  
  const doDelete = (e) => {
    const emt = e.target;
    const productKey = emt.attributes.productkey.value;
    
    const dbRef = getDatabase();
    remove(ref(dbRef, `products/${productKey}`));
  }
  
  const emt = <Link href="/"><a className={`${styles.button} ${styles.redButton}`} onClick={doDelete} productkey={productKey}>Delete it</a></Link>
  
  return emt;
}
