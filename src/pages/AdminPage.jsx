import { Link } from 'react-router-dom';
import NewProduct from '../components/NewProduct';

export default function AdminPage() {
  return (
    <div>
      <select name='' id=''>
        <option value='a'>a</option>
        <option value='b'>b</option>
        <option value='c'>c</option>
      </select>
      <NewProduct />
    </div>
  );
}
