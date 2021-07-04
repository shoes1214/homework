import LoginCode from "../page/LoginCode/LoginCode"
import LoginPassword from "../page/LoginPassword/LoginPassword"
import RegisterCode from "../page/RegisterCode/RegisterCode"
import RegisterPassword from "../page/RegisterPassword/RegisterPassword"
import RegisterPhone from "../page/RegisterPhone/RegisterPhone"

const routes = [
  { path: '/login/code', component: LoginCode },
  { path: '/login/password', component: LoginPassword },
  { path: '/register/phone', component: RegisterPhone },
  { path: '/register/code', component: RegisterCode },
  { path: '/register/password', component: RegisterPassword },
  
]

export default routes
