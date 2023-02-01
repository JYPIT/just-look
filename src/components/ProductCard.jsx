import styles from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { id, title, price, image } = product;
  const navigate = useNavigate();
  const onClickProduct = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  const onClickBuyBtn = () => {
    alert('준비중입니다...');
  };

  return (
    <>
      <div className={styles.productCard} onClick={onClickProduct}>
        <span className={styles.heart}>❤️</span>
        <img src={image} alt='이미지 준비중...' />
        <span className={styles.title}>{title}</span>
        <span>
          {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} 원
        </span>
      </div>
      <div className={styles.btn}>
        <button onClick={onClickBuyBtn}>구매하기</button>
      </div>
    </>
  );
}
