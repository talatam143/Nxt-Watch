import styled from 'styled-components'

export const GamingBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const GamingVideosContainer = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
    height: 92vh;
  }
  @media (min-width: 768px) {
    width: 80vw;
    height: 88vh;
  }

  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ebebeb')};
  overflow-y: auto;
  overflow-x: hidden;
`
export const GamingBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f1f5f9')};
`
export const GamingLogoContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#d7dfe9')};
  padding: 18px;
  border-radius: 50px;
  margin-right: 10px;
`

export const GamingMainHeading = styled.h1`
  color: ${props => props.theme === true && '#ffffff'};
`

export const GamingVideoErrorContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  margin-bottom: 10px;
  text-align: center;
  color: ${props => props.darkMode === true && '#ffffff'};
`
export const GamingVideosListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 30px;
  }
  @media (max-width: 768px) {
    margin: 15px;
  }
`
export const GamingEachVideoContainer = styled.div`
  @media (min-width: 768px) {
    width: 23vw;
    margin-left: 15px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    width: 42vw;
    margin-left: 15px;
    margin-bottom: 20px;
  }
`

export const GamingEachVideosImage = styled.img`
  @media (min-width: 768px) {
    width: 23vw;
  }
  @media (max-width: 768px) {
    width: 42vw;
  }
`

export const GamingEachVideoHeading = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#0f0f0f')};
  font-size: 20px;
  font-weight: 600;
`

export const GamingEachVideoPara = styled.p`
  color: ${props => (props.darkMode ? '#909090' : '#0f0f0f')};
  margin-top: -10px;
`
