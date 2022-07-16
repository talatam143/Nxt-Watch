import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../Context/nxtWatchContext'
import {
  HeaderContainer,
  LogoImage,
  UnorderedListContainer,
  HeaderProfileImage,
  LogoutButton,
  IconButton,
  ListItemsSmall,
  LogoutPopupContainer,
  PopupLogoutButton,
  PopupCancelButton,
} from './styledComponents'
import MobileMenu from './mobileMenu'
import './index.css'

function Header(props) {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode, changeTheme} = value
        const handleTheme = () => {
          changeTheme()
        }
        const handleLogout = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        return (
          <HeaderContainer status={darkMode}>
            <Link to="/">
              <img
                src={
                  darkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
                className="navbarLogoImage"
              />
            </Link>
            <UnorderedListContainer className="headerUnorderedList">
              <li>
                <IconButton
                  data-testid="theme"
                  onClick={handleTheme}
                  theme={darkMode}
                >
                  {darkMode ? <FiSun /> : <FaMoon />}
                </IconButton>
              </li>

              <ListItemsSmall>
                <Popup
                  modal
                  trigger={
                    <IconButton
                      type="button"
                      data-testid="theme"
                      theme={darkMode}
                    >
                      <GiHamburgerMenu />
                    </IconButton>
                  }
                >
                  {close => <MobileMenu darkMode={darkMode} onClose={close} />}
                </Popup>
              </ListItemsSmall>

              <li>
                <HeaderProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="headerProfileImage"
                />
              </li>
              <li>
                <Popup
                  modal
                  trigger={
                    <div>
                      <LogoutButton theme={darkMode}>Logout</LogoutButton>
                      <ListItemsSmall>
                        <IconButton data-testid="theme" theme={darkMode}>
                          <FiLogOut />
                        </IconButton>
                      </ListItemsSmall>
                    </div>
                  }
                >
                  {close => (
                    <LogoutPopupContainer theme={darkMode}>
                      <p>Are you sure, you want to logout</p>
                      <div>
                        <PopupCancelButton
                          onClick={() => close()}
                          theme={darkMode}
                        >
                          Cancel
                        </PopupCancelButton>
                        <PopupLogoutButton
                          theme={darkMode}
                          onClick={handleLogout}
                        >
                          Confirm
                        </PopupLogoutButton>
                      </div>
                    </LogoutPopupContainer>
                  )}
                </Popup>
              </li>
            </UnorderedListContainer>
          </HeaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
