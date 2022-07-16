import styled from 'styled-components'

export const NotFoundBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const NotFoundVideosContainer = styled.div`
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
export const NotFoundErrorContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;
  text-align: center;
  margin-bottom: 10px;
  color: ${props => props.darkMode === true && '#ffffff'};
  height: 80vh;
`
