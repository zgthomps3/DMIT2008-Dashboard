import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ProductCard.module.css'


export default function ProductCard({ productKey, title, imageURL, price, qty,  viewMode }) {
  const priceStr = '$' + price.slice(0,-2) + '.' + price.slice(-2);
  
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img src={imageURL} alt="" className={styles.productImage} />
        {
          viewMode ? null :
          (
          <div className={styles.productButtons}>
            <Link href={{ pathname: '/edit-product', query: {productKey} }}><a><img src="/pencil.svg" alt="Edit" /></a></Link>
            <Link href={{ pathname: '/delete-product', query: {productKey} }}><a><img src="/trash.svg" alt="Delete" /></a></Link>
          </div>
          )
        }
      </div>
      <p className={styles.productName}>{title}</p>
      <div>
        <span className={styles.productPrice}>{priceStr}</span>
        <span className={styles.productQty}>{'(' + qty + 'g per bag)'}</span>
      </div>
      {
        viewMode ? null :
        (
          <a href="" className={styles.buyButton}>Buy Now</a>
        )
      }
    </div>
  );
}