import styles from './NewProduct.module.css';
import { useState } from 'react';

import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        console.log(url);
        addNewProduct(product, url).then(() => {
          setSuccess('상품이 등록되었습니다.');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => setIsUploading(false));
    setProduct({});
  };

  return (
    <section className={styles.section}>
      <span>상품 등록</span>
      {success && <p>{success}</p>}
      <div className={styles.preview}>
        {file && <img src={URL.createObjectURL(file)} alt='이미지 오류' />}
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type='file'
          name='file'
          accept='image/*'
          required
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='카테고리'
          name='category'
          value={product.category ?? ''}
          required
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='상품명'
          name='title'
          value={product.title ?? ''}
          required
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='상품 설명'
          name='description'
          value={product.description ?? ''}
          required
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='가격'
          name='price'
          value={product.price ?? ''}
          required
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='사이즈 콤마(,)로 구분'
          name='options'
          value={product.options ?? ''}
          required
          onChange={onChange}
        />
        <button disabled={isUploading}>
          {isUploading ? '업로드 중...' : '상품 등록'}
        </button>
      </form>
    </section>
  );
}
