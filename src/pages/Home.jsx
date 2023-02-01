import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';
import styles from './Home.module.css';

export default function Home() {
  // const { data: products, isLoading } = useQuery(['products'], () => {
  //   return getProducts();
  // });

  const {
    productsQuery: { isLoading, data: products },
  } = useProducts();
  return (
    <div className={styles.container}>
      <Banner />
      {isLoading ? (
        <h1>wait...</h1>
      ) : (
        <>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>인기 상품</h1>
            <div className={styles.grid}>
              {products?.map((product) => (
                <div className={styles.gridItem} key={product.id}>
                  <ProductCard product={product} set />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>신규 상품</h1>
            <div className={styles.grid}>
              {products?.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
