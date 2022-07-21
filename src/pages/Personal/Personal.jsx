import React, { useContext } from 'react'
import { MyButton } from '../../components/UI/button/MyButton'
import classes from './Personal.module.css'
import {useNavigate} from "react-router-dom";
import { Context } from '../../context/context';

export const Personal = () => {
  const navigate = useNavigate()

  const {isAuth, setIsAuth} = useContext(Context)
  const {userName, setUserName} = useContext(Context)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={classes.personal}>
      <h1 className={classes.personal__title}>Привет, {userName}</h1>
      <MyButton onClick={logout}>Выйти из аккаунта</MyButton>
      <MyButton onClick={() => navigate('/contacts')}>Перейти в контакты</MyButton>
    </div>
  )
}
