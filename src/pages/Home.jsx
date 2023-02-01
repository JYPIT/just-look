import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getProducts } from '../api/firebase';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import styles from './Home.module.css';

export default function Home() {
  // Mock Data

  // const { data: products, isLoading } = useQuery(['products'], async () => {
  //   return await fetch('data/products.json')
  //     .then((res) => res.json())
  //     .then((data) => data.items);
  // });

  const { data: products, isLoading } = useQuery(['products'], () => {
    return getProducts();
  });

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
