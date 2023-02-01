import styles from './Search.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';

export default function Search() {
  const {
    state: { text },
  } = useLocation();

  const { data: products, isLoading } = useQuery(['products'], () => {
    return getProducts();
  });

  const searchedData =
    !isLoading && products?.filter((item) => item.title.includes(text));

  return (
    <div className={styles.wrapper}>
      {!isLoading && (
        <>
          <h1>" {text} " 검색 결과...</h1>
          <div className={styles.grid}>
            {searchedData?.map((data) => (
              <div className={styles.gridItem} key={data.id}>
                <ProductCard product={data} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
