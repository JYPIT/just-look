import styles from './ProductCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { id, title, price, image } = product;
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const onClickProduct = () => {
    navigate(`/products/${id}`, { state: { product } });
  };
  const onClickCartBtn = () => {
    setCart([...cart, product]);
  };
  const onClickBuyBtn = () => {
    alert('구매 페이지로 이동합니다...');
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
        <button onClick={onClickCartBtn}>장바구니 추가</button>
        <button onClick={onClickBuyBtn}>구매하기</button>
      </div>
    </>
  );
}
