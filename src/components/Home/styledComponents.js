import styled from 'styled-components'

export const HomeBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HomeVideosContainer = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
    height: 92vh;
  }
  @media (min-width: 768px) {
    width: 80vw;
    height: 88vh;
  }

  background-color: ${props => props.theme === true && '#181818'};
  overflow-y: auto;
  overflow-x: hidden;
`
export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: fit-content;
  padding: 25px 10px;
`
export const BannerImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoImage = styled.img`
  @media (min-width: 768px) {
    width: 180px;
  }
  @media (max-width: 768px) {
    width: 130px;
  }
`
export const PARA = styled.p`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    width: 80vw;
  }
  @media (min-width: 768px) {
    width: 34%;
  }
`

export const PremiumButton = styled.button`
  background-color: transparent;
  border-width: 1.5px;
  padding: 8px 10px;
  border-radius: 2px;
  font-weight: 600;
  & :hover {
    cursor: pointer;
  }
`

export const HomeSearchContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 70vw;
  @media (max-width: 768px) {
    width: 100vw;
  }
`
export const HomeSearchInput = styled.input`
  height: 30px;
  width: 30vw;
  padding-left: 10px;
  border-width: 1px 0 1px 1px;
  background-color: ${props => (props.theme === true ? 'transparent' : null)};
  border-color: ${props => (props.theme === true ? ' #ebebeb' : null)};
  color: ${props => (props.theme === true ? ' #ebebeb' : null)};
  font-size: 14px;
  @media (max-width: 768px) {
    width: 60vw;
  }
  @media (min-width: 768px) {
    width: 30vw;
  }
`
export const HomeSearchButton = styled.button`
  height: 30px;
  width: 60px;
  font-size: 20px;
  border-width: 1px 1px 1px 1px;
  padding-top: 5px;
  color: ${props => (props.theme === true ? ' #ebebeb' : null)};
  background-color: ${props => (props.theme === true ? '#212121' : null)};
  border-color: ${props => (props.theme === true ? ' #ebebeb' : null)};
`
export const HomeVideosApiContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const HomeErrorContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  margin-bottom: 10px;
  color: ${props => props.darkMode === true && '#ffffff'};
  text-align: center;
`
