import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <form action=''>
        <input type='text' />
        <input type='password' />
      </form>
      <div>
        <Link to='/signup'>지금 회원가입 하기 →</Link>
      </div>
    </div>
  );
}
