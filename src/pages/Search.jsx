import styles from './Search.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Search() {
  const [data, setData] = useState();

  const {
    state: { text },
  } = useLocation();

  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => setData(data.items));
  }, []);

  const searchedData = data?.filter((item) => item.name.includes(text));

  return (
    <div className={styles.wrapper}>
      <h1>" {text} " 검색 결과...</h1>
      <div className={styles.grid}>
        {searchedData?.map((data) => (
          <div className={styles.gridItem} key={data.id}>
            <ProductCard product={data} />
          </div>
        ))}
      </div>
    </div>
  );
}
