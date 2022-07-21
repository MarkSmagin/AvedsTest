import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../context/context'
import { MyButton } from '../button/MyButton'
import { MyInput } from '../input/MyInput'
import classes from './MyModal.module.css'
import users from '../../../users/users.json'
import { validate } from '../../validate/validate'

export const MyModal = ({active, setActive}) => {
  const rootClasses = [classes.myModal]
  if(active) {
    rootClasses.push(classes.active)
  }

  const navigate = useNavigate()

  const {isAuth, setIsAuth} = useContext(Context)
  const {userName, setUserName} = useContext(Context)

  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const login = e => {
    e.preventDefault()
    validate(userLogin, userPassword)
    for(let i = 0; i < Object.keys(users).length; i++) {
      if(userLogin === users[i].login && userPassword === users[i].password) {
        setIsAuth(true)
        setUserName(users[i].name)
        localStorage.setItem('auth', 'true')
        navigate('/personal')
      }
    }
  }

  return (
    <div onClick={() => setActive(false)} className={rootClasses.join(' ')}>
      <div onClick={e => e.stopPropagation()} className={classes.myModal__content}>
        <form onSubmit={login}>
          <h2 className={classes.myModal__text}>Логин:</h2>
          <MyInput type='text' value={userLogin} onChange={e => setUserLogin(e.target.value)}/>
          <h2 className={classes.myModal__text}>Пароль:</h2>
          <MyInput type='password' value={userPassword} onChange={e => setUserPassword(e.target.value)}/>
          <MyButton onClick={() => setActive(false)}>Авторизоваться</MyButton>
        </form>
      </div>
    </div>
  )
}