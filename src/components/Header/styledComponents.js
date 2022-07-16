import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 100vw;
  height: 12vh;
  flex-wrap: wrap;
  background-color: ${props => props.status === true && '#212121'};
  @media (max-width: 768px) {
    padding: 0 20px;
    height: 8vh;
  }
`

export const LogoImage = styled.img`
  @media (min-width: 768px) {
    width: 180px;
  }
  @media (max-width: 768px) {
    width: 130px;
  }
`

export const UnorderedListContainer = styled.ul`
  display: flex;
  flex-direction: row;
`

export const HeaderProfileImage = styled.img`
  @media (min-width: 768px) {
    width: 33px;
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  @media (min-width: 768px) {
    padding: 7px 12px;
    background-color: transparent;
    color: ${props => (props.theme === true ? '#ffffff' : '#3b82f6')};
    border-color: ${props => (props.theme === true ? '#ffffff' : '#3b82f6')};
    border-width: 2px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const IconButton = styled.button`
  background-color: transparent;
  border-style: none;
  font-weight: bold;
  padding: 7px 0;
  font-size: 23px;
  margin-left: 15px;
  color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
`

export const ListItemsSmall = styled.li`
  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#231f20' : '#ebebeb')};
  color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
  box-shadow: ${props =>
    props.theme === true ? '0 0 10px 0 #231f20' : '0 0 10px 0 #ebebeb'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 350px;
    height: 130px;
  }
  @media (max-width: 768px) {
    width: 80vw;
    height: 150px;
  }
`
export const MenuContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#181818' : '#ffffff')};
  color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 0;
`

export const PopupLogoutButton = styled.button`
  background-color: #3b82f6;
  border-style: none;
  color: #ffffff;
  padding: 7px 12px;
  border-radius: 2px;
  margin: 10px;
  font-size: 16px;
`

export const PopupCancelButton = styled.button`
  background-color: transparent;
  border-style: solid;
  border-color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
  color: ${props => (props.theme === true ? '#ffffff' : '#181818')};
  border-width: 1px;
  padding: 7px 12px;
  border-radius: 2px;
  margin: 10px;
  font-size: 15px;
`

export const MobileMenuLinksContainer = styled.div`
  margin-top: 100px;
`
