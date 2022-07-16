import styled from 'styled-components'

export const OpenedVideoBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const OpenedVideoContainer = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
    height: 92vh;
  }
  @media (min-width: 768px) {
    width: 80vw;
    height: 88vh;
    padding: 0 20px;
  }

  background-color: ${props => props.theme === true && '#0f0f0f'};
   color : ${props => (props.theme === true ? '#ffffff' : null)}
  overflow-y: auto;
  overflow-x: hidden;
`

export const OpenedVideoErrorContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  margin-bottom: 10px;
  text-align: center;
  color: ${props => props.darkMode === true && '#ffffff'};
`

export const PropertiesContainer = styled.div`
  display: flex;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ViewAgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  height: 30px;
`

export const PropertiesButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: fit-content;
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
`

export const ChannelNameContainer = styled.div`
  margin-left: 20px;
`

export const VideoTitlePara = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: ${props => (props.darkMode === true ? '#ffffff' : ' #212121')};
`

export const PropertiesPara = styled.p`
  color: ${props => (props.darkMode === true ? '#cbd5e1' : ' #424242')};
  margin-right: 10px;
`

export const PropertiesDotPara = styled.p`
  color: ${props => (props.darkMode === true ? '#cbd5e1' : ' #424242')};
  font-size: 30px;
  font-weight: bolder;
  margin-top: 15px;
  margin-right: 10px;
`

export const PropertiesDescriptionPara = styled.p`
  color: ${props => (props.darkMode === true ? '#cbd5e1' : ' #424242')};
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`

export const HorizontalLine = styled.hr``

export const ChannelLogo = styled.img`
  width: 80px;
  align-self: center;
`

export const PropertiesButton = styled.button`
  background-color: transparent;
  border-style: none;
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.darkMode === true ? '#ffffff' : ' #64748b"')};
  color: ${props => props.like === true && '#2563eb'};
  color: ${props => props.dislike === true && '#2563eb'};
  color: ${props => props.isSaved === true && '#2563eb'};
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-right: 10px;
  }
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`
export const AllVideoPropsContainer = styled.div`
  @media (max-width: 768px) {
    margin: 0 20px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`
