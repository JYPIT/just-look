import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>Just Look</h1>
      <img
        src='https://images.unsplash.com/photo-1613878420618-662a804d442f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
        alt='이미지 준비중...'
      />
      <img
        src='https://images.unsplash.com/photo-1594734415578-00fc9540929b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        alt='이미지 준비중...'
      />
      <img
        src='https://images.unsplash.com/photo-1613007326658-3aeb881749d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        alt='이미지 준비중...'
      />
    </div>
  );
}
