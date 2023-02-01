import useCart from '../hooks/useCart';
import styles from './CartItem.module.css';
export default function CartItem({
  product,
  product: { id, image, title, option, price, quantity },
}) {
  const { addOrUpdateItem, removeItem } = useCart();

  const handleBtnPlus = () => {
    if (quantity > 9) return alert('더이상 추가할 수 없습니다.');
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleBtnMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handleRemove = () => {
    removeItem.mutate(id);
  };
  return (
    <div className={styles.container}>
      <img src={image} alt='이미지 준비중...' />
      <div className={styles.info}>
        <span>{title}</span>
        <span>{option}</span>
        <span>
          {price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} 원
        </span>
      </div>
      <div>
        <span>
          <button onClick={handleBtnPlus}>+</button>
          {quantity}
          <button onClick={handleBtnMinus}>-</button>
        </span>
        <span onClick={handleRemove}>삭제</span>
        {/* TODO: 다중 선택 체크 박스 구현 */}
        {/* <input type='checkbox' /> */}
      </div>
    </div>
  );
}
