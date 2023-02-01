import styles from './CartStatus.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  // const { uid } = useAuthContext();
  // const { data: products } = useQuery(['carts'], () => getCart(uid));
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className={styles.cart}>
      <AiOutlineShoppingCart />
      {products && <p>{products.length}</p>}
    </div>
  );
}
