import { path } from '../utils/constant'
import LoginContainer from '../modules/auth/login'
import DashboardContainer from '../modules/app/home'
import { GetToken } from '../utils/helper'
import PlaygroundContainer from '../modules/app/playground'

const Routes = () => {
  const userToken = GetToken()
  const guestRoutes = [{ path: path.LOGIN_PAGE, component: LoginContainer }]
  const authRoutes = [
    {
      path: path.PLAYGROUND_PAGE,
      component: PlaygroundContainer,
      isAuth: true,
    },
    { path: path.HOME_PAGE, component: DashboardContainer, isAuth: true },
  ]

  return userToken ? authRoutes : guestRoutes
}
export default Routes
