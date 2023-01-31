import styles from './ProductCard.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { id, title, price, image } = product;
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };
  return (
    <div className={styles.productCard} onClick={onClick}>
      <img src={image} alt='이미지 준비중...' />
      <span className={styles.title}>{title}</span>
      <span>
        {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} 원
      </span>
      <ul className={styles.option}>
        <li>♥️</li>
        <li>장바구니</li>
      </ul>
    </div>
  );
}
