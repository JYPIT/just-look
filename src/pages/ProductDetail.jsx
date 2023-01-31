import styles from './ProductDetail.module.css';

import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();

  return (
    <div className={styles.container}>
      <img src={product.image} alt='' />
      <section className={styles.info}>
        <span>{product.title}</span>
        <p>{product.description}</p>
        <span>{product.price}</span>
        <button>장바구니 추가</button>
        <button>구매하기</button>
      </section>
    </div>
  );
}
