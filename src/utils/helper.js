import { useSelector } from 'react-redux'
import { setLanguage, setToken } from '../store/slice/user'
import { STORE_LANGUAGE_KEY } from './constant'

export const SetToken = (dispatch, token) => {
  localStorage.setItem('token', token)
  dispatch(setToken('example'))
}
export const GetToken = () =>
  useSelector((state) => state.user.token || localStorage.getItem('token'))

export const RemoveToken = () => localStorage.removeItem('token')
export const clearLocalStorage = () => localStorage.clear()

export const userLogout = () => {
  RemoveToken()
  window.location.replace('/')
  // window.location.reload()
}

export const SetLanguage = (dispatch, lang) => {
  localStorage.setItem(STORE_LANGUAGE_KEY, lang)
  dispatch(setLanguage(lang))
}

export const GetLanguage = () =>
  useSelector(
    (state) =>
      state.user[STORE_LANGUAGE_KEY] || localStorage.getItem(STORE_LANGUAGE_KEY)
  )
