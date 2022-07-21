import React, { useContext } from 'react'
import classes from './Main.module.css'
import { FeautereItem } from '../../components/FeautereItem/FeautereItem'
import { MyButton } from '../../components/UI/button/MyButton'
import cardiogram from '../../assets/images/cardiogram.svg'
import stethoscope from '../../assets/images/stethoscope.svg'
import medicalHistory from '../../assets/images/medicalHistory.svg'
import {useNavigate} from "react-router-dom";
import { Context } from '../../context/context'

export const Main = ({active, setActive}) => {
  const navigate = useNavigate()

  const {isAuth, setIsAuth} = useContext(Context)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div>
      <div div className={classes.main}>
        <h1 className={classes.main__title}>Место для получения медицинской помощи</h1>
        {isAuth 
          ? <MyButton onClick={logout}>Выйти</MyButton>
          : <MyButton onClick={() => setActive(true)}>Войти</MyButton>
        }
        <MyButton onClick={() => navigate('/contacts')}>Контакты</MyButton>
      </div>
      <div className={classes.features}>
        <FeautereItem feature={{class: 'cardiogram', src: cardiogram, title: 'Онлайн-прием', text: 'Рыба текст', alt: 'Кардиограмма'}}/>
        <FeautereItem feature={{class: 'stethoscope', src: stethoscope, title: 'Экстренный Случай', text: 'Рыба текст', alt: 'Стеторскоп'}}/>
        <FeautereItem feature={{class: 'medicalHistory', src: medicalHistory, title: 'Лечение рака', text: 'Рыба текст', alt: 'Медицинская история'}}/>
      </div>  
    </div>
  )
}
