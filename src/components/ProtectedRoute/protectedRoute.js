import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

function ProtectedRoute(params) {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...params} />
}

export default ProtectedRoute
