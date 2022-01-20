import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import { ToastContainer } from 'react-toastify';

export function App() {

  return (
    <>
      <Header />

      <Dashboard />

      <ToastContainer autoClose={2000}/>
      
      <GlobalStyle />
    </>
  );
}