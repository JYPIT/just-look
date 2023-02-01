import styles from './ProductDetail.module.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();

  const {
    state: {
      product: { id, title, image, description, category, price, options },
    },
  } = useLocation();

  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClickCart = () => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <div className={styles.container}>
      <img src={image} alt='' />
      <section className={styles.section}>
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          <span className={styles.desc}>{description}</span>
          <span className={styles.price}>
            {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
            원
          </span>
        </div>
        <div className={styles.option}>
          <label htmlFor='select'>옵션: </label>
          <select id='select' onChange={handleSelect} value={selected}>
            {options &&
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
          </select>
        </div>
        <div className={styles.button}>
          {success && <span>{success}</span>}
          <button className={styles.cartBtn} onClick={handleClickCart}>
            장바구니 추가
          </button>
          <button className={styles.buyBtn}>구매하기</button>
        </div>
      </section>
    </div>
  );
}
