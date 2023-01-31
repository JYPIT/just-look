import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { AuthContextProvider } from './components/context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;