import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoGameController} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../Context/nxtWatchContext'

import './index.css'

class HamMenu extends Component {
  render() {
    const {match} = this.props
    const {path} = match
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          const themeStyle = darkMode ? 'darkStyles' : ''
          const menuLinks = darkMode ? 'darkListLinkItems' : 'menuListLinkItems'
          const selectedLinks = darkMode
            ? 'SelectedDarkLinkItem'
            : 'SelectedLinkItem'
          return (
            <div className={`menuContainer ${themeStyle}`}>
              <div className="menuListContainer">
                <Link
                  to="/"
                  className={path === '/' ? selectedLinks : menuLinks}
                >
                  <AiFillHome
                    className={path === '/' ? 'SelectedMenuIcons' : 'menuIcons'}
                  />
                  Home
                </Link>
                <Link
                  to="/trending"
                  className={path === '/trending' ? selectedLinks : menuLinks}
                >
                  <FaFire
                    className={
                      path === '/trending' ? 'SelectedMenuIcons' : 'menuIcons'
                    }
                  />
                  Trending
                </Link>
                <Link
                  to="/gaming"
                  className={path === '/gaming' ? selectedLinks : menuLinks}
                >
                  <IoGameController
                    className={
                      path === '/gaming' ? 'SelectedMenuIcons' : 'menuIcons'
                    }
                  />
                  Gaming
                </Link>
                <Link
                  to="/saved-videos"
                  className={
                    path === '/saved-videos' ? selectedLinks : menuLinks
                  }
                >
                  <MdPlaylistAdd
                    className={
                      path === '/saved-videos'
                        ? 'SelectedMenuIcons'
                        : 'menuIcons'
                    }
                  />{' '}
                  Saved videos
                </Link>
              </div>
              <div className="menuContactContainer">
                <p className="contactContainerHeading">CONTACT US</p>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="contactContainerImages"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="contactContainerImages"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="contactContainerImages"
                  />
                </div>
                <p className="contactContainerPara">
                  Enjoy! Now to see your channels and recommendations!
                </p>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(HamMenu)
