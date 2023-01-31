import styles from './User.module.css';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className={styles.user}>
      <img src={photoURL} alt={displayName} />
      <span>{displayName}</span>
    </div>
  );
}
