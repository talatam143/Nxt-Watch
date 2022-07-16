import {IoMdClose} from 'react-icons/io'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoGameController} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'

import {MenuContainer, MobileMenuLinksContainer} from './styledComponents'
import './index.css'

function MobileMenu(params) {
  const {darkMode, onClose} = params
  const {match} = params
  const {path} = match
  const menuLinks = darkMode ? 'darkListLinkItems' : 'menuListLinkItems'
  const selectedLinks = darkMode ? 'SelectedDarkLinkItem' : 'SelectedLinkItem'
  return (
    <MenuContainer theme={darkMode}>
      <IoMdClose onClick={onClose} className="mobileMenuCloseButton" />
      <MobileMenuLinksContainer>
        <Link
          to="/"
          className={path === '/' ? selectedLinks : menuLinks}
          onClick={onClose}
        >
          <AiFillHome
            className={path === '/' ? 'SelectedMenuIcons' : 'menuIcons'}
          />
          Home
        </Link>
        <Link
          to="/trending"
          className={path === '/trending' ? selectedLinks : menuLinks}
          onClick={onClose}
        >
          <FaFire
            className={path === '/trending' ? 'SelectedMenuIcons' : 'menuIcons'}
          />
          Trending
        </Link>
        <Link
          to="/gaming"
          className={path === '/gaming' ? selectedLinks : menuLinks}
          onClick={onClose}
        >
          <IoGameController
            className={path === '/gaming' ? 'SelectedMenuIcons' : 'menuIcons'}
          />
          Gaming
        </Link>
        <Link
          to="/saved-videos"
          className={path === '/saved-videos' ? selectedLinks : menuLinks}
          onClick={onClose}
        >
          <MdPlaylistAdd
            className={
              path === '/saved-videos' ? 'SelectedMenuIcons' : 'menuIcons'
            }
          />{' '}
          Saved videos
        </Link>
      </MobileMenuLinksContainer>
    </MenuContainer>
  )
}

export default withRouter(MobileMenu)
