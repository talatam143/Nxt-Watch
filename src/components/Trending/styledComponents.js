import styled from 'styled-components'

export const TrendingBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendingVideosContainer = styled.div`
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

export const TrendingBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#181818' : '#f1f5f9')};
`
export const TrendingLogoContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#d7dfe9')};
  padding: 18px;
  border-radius: 50px;
  margin-right: 10px;
`

export const TrendingMainHeading = styled.h1`
  color: ${props => props.theme === true && '#ffffff'};
`

export const TrendingVideoErrorContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  margin-bottom: 10px;
  text-align: center;
  color: ${props => props.darkMode === true && '#ffffff'};
`
export const TrendingVideosListContainer = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TrendingEachVideoContainer = styled.div`
  display: flex;

  justify-content: start;
  align-items: flex-start;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    width: 60vw;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
  }
`

export const TrendingEachVideoImage = styled.img`
  @media (min-width: 768px) {
    width: 28vw;
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
`

export const TrendingEachVideoSubContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
  }
  @media (min-width: 768px) {
    margin-left: 20px;
    margin-top: -20px;
  }
`

export const TrendingEachVideoViewCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const TrendingEachVideoHeading = styled.p`
  color: ${props => (props.darkMode ? '#ffffff' : '#0f0f0f')};
  font-size: 20px;
  font-weight: 600;
`

export const TrendingEachVideoPara = styled.p`
  color: ${props => (props.darkMode ? '#909090' : '#0f0f0f')};
  margin-right: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`
export const TrendingEachVideoDotPara = styled.p`
  color: ${props => (props.darkMode ? '#909090' : '#0f0f0f')};
  margin-right: 15px;
  font-weight: bolder;
  font-size: 30px;
  margin-top: 10px;
`
export const TrendingEachVideoChannelLogo = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    width: 60px;
    margin: 0 20px;
  }
`

export const TrendingEachVideoSmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const TrendingEachVideoSmallPara = styled.p`
  color: ${props => (props.darkMode ? '#909090' : '#0f0f0f')};
  margin-right: 15px;
`
