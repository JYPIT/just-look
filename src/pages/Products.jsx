import { useQuery } from '@tanstack/react-query';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import styles from './Products.module.css';

export default function Products() {
  const { data: products, isLoading } = useQuery(['products'], async () => {
    return await fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => data.items);
  });

  return (
    <div>
      <Banner />
      {isLoading ? (
        <h1>wait...</h1>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <div className={styles.gridItem} key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
