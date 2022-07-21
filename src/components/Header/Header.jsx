import logo from '../../assets/images/logo.svg'
import { MyButton } from '../UI/button/MyButton'
import classes from './Header.module.css'
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { Context } from '../../context/context';

export const Header = ({active, setActive}) => {
  const {isAuth, setIsAuth} = useContext(Context)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <div className={classes.header__navbar}>
        <Link className={classes.myLink} to='/contacts'>Контакты</Link>
        {isAuth 
          ? <MyButton onClick={logout}>Выйти</MyButton>
          : <MyButton onClick={() => setActive(true)}>Войти</MyButton>
        }
      </div>
    </header>
  )
}