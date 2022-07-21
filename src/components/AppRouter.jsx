import { useContext } from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { Context } from "../context/context";
import { privateRoutes, publicRoutes } from '../router/router';
import { Loader } from './UI/Loader/Loader'

export const AppRouter = ({active, setActive}) => {
  const {isAuth, isLoading} = useContext(Context)

  if(isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ?
      <Routes active={active} setActive={setActive}>
        {privateRoutes.map((route, index) => {
          return (
            <Route key={index} element={<route.element active={active} setActive={setActive} />} path={route.path}/>
          )
        })}
        <Route path="/*" element={<Navigate to = "/main"/>}/>
      </Routes>
      :
      <Routes active={active} setActive={setActive}>
        {publicRoutes.map((route, index) => {
        return (
          <Route key={index} element={<route.element active={active} setActive={setActive} />} path={route.path}/>
        )
      })}
        <Route path="/*" element={<Navigate to = "/main"/>}/>
      </Routes>  
  )
}
