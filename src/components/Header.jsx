import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import styles from './Header.module.css';
import User from './User';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const naviagte = useNavigate();
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    naviagte('/search', { state: { text } });
  };
  console.log(user);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/'>Just Look</Link>
      </div>
      <form className={styles.search} onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>검색</button>
      </form>

      <nav className={styles.nav}>
        {user && user.isAdmin && <Link to={`/adminPage`}>Admin</Link>}
        {!user && (
          <>
            <span className={styles.login} onClick={login}>
              Login
            </span>
            <Link to='/guest/cart'>Cart</Link>
          </>
        )}
        {user && (
          <>
            <span className={styles.login} onClick={logout}>
              Logout
            </span>
            <Link to={`/${user.uid}/profile`} user={user}>
              <User user={user} />
            </Link>
            <Link to={`/${user.uid}/cart`}>Cart</Link>
          </>
        )}
      </nav>
    </header>
  );
}
