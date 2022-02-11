import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'


export default function ProductCard({ productKey, title, imageURL, price, qty }) {
  const priceStr = '$' + price.slice(0,-2) + '.' + price.slice(-2);
  
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img src={imageURL} alt="" className={styles.productImage} />
        <div className={styles.productButtons}>
          <a href=""><img src="/pencil.svg" alt="Edit" /></a>
          <a href=""><img src="/trash.svg" alt="Delete" /></a>
        </div>
      </div>
      <p className={styles.productName}>{title}</p>
      <div>
        <span className={styles.productPrice}>{priceStr}</span>
        <span className={styles.productQty}>{'(' + qty + 'g per bag)'}</span>
      </div>
      <a href="" className={styles.buyButton}>Buy Now</a>
    </div>
  );
}