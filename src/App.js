import React, { useEffect, useState } from 'react'
import {BrowserRouter} from "react-router-dom";
import { Header } from './components/Header/Header';
import './styles/reset.css';
import './styles/App.css';
import { MyModal } from './components/UI/MyModal/MyModal';
import { AppRouter } from './components/AppRouter';
import { Context } from './context/context';

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const [userName, setUserName] = useState('')
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
      <Context.Provider value={{
        isAuth,
        setIsAuth,
        isLoading,
        userName,
        setUserName
      }}>
        <BrowserRouter>
          <MyModal active={modalActive} setActive={setModalActive}></MyModal>
          <Header active={modalActive} setActive={setModalActive}/>
          <div className='container'>
            <AppRouter active={modalActive} setActive={setModalActive}/>
          </div>
        </BrowserRouter>
      </Context.Provider>
  );
}

export default App;