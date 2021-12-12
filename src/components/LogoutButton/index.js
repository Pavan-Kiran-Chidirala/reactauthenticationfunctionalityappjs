// Write your JS code here
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const revokeAccess = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={revokeAccess}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
