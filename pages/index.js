import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import ProductCard from '../components/product-card'

import '../lib/firebase.js'
import { getDatabase, ref, val, onValue } from 'firebase/database'


function Home({ data }) {
  return (
    <Layout pageName={"Homepage"}>
      <p>Welcome to our shop! Check out our products:</p>
      
      <div className={styles.productList}>
        {data.map((prod) => {
          return ( <ProductCard key={prod.key} productKey={prod.key} title={prod.data.title} imageURL={prod.data.image} price={prod.data.price} qty={prod.data.qty} /> );
        })}
      </div>
    </Layout>
  )
}


export async function getServerSideProps() {
  const db = getDatabase();
  const dbRef = ref(db, '/products');
  
  var data = new Array();
  
  onValue(dbRef, (snapshot) => {
    snapshot.forEach((child) => {
      data.push({ 'key':child.key, 'data':child.val() });
    });
  });
  
  return { props: { data } };
}


export default Home