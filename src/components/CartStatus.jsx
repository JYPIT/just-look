import styles from './CartStatus.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));
  return (
    <div className={styles.cart}>
      <AiOutlineShoppingCart />
      {products && <p>{products.length}</p>}
    </div>
  );
}
