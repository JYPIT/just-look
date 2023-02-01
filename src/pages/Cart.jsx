import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import useCart from '../hooks/useCart';
import styles from './Cart.module.css';

const SHIPPING = 3000;

export default function Cart() {
  // const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (acc, current) => acc + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className={styles.cart}>
      <h1>Cart</h1>
      {!hasProducts && <p>현재 담겨있는 상품이 존재하지 않습니다.</p>}

      {hasProducts && (
        <>
          <ul>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className={styles.priceCard}>
            <PriceCard text='상품 총액' price={totalPrice} />
            +
            <PriceCard text='배송비' price={SHIPPING} />
            =
            <PriceCard text='총 결제 금액' price={totalPrice + SHIPPING} />
          </div>
        </>
      )}
    </section>
  );
}
