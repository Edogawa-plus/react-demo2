import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

function AuthRoute({ children }) {
  const token = getToken()
  if (token) {
    return <>{children}</>
  }
  return <Navigate to={'/login'} replace></Navigate>
}

export default AuthRoute