import Header from '../Header/index'
import HamMenu from '../Menu/index'
import {
  NotFoundBodyContainer,
  NotFoundVideosContainer,
  NotFoundErrorContainers,
} from './styledComponents'
import ThemeContext from '../../Context/nxtWatchContext'
import NoResults from '../NoResults/index'

function NotFound() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkMode} = value

        return (
          <>
            <Header />
            <NotFoundBodyContainer>
              <HamMenu />
              <NotFoundVideosContainer theme={darkMode}>
                <NotFoundErrorContainers darkMode={darkMode}>
                  <NoResults status="NOTFOUND" darkMode={darkMode} />
                </NotFoundErrorContainers>
              </NotFoundVideosContainer>
            </NotFoundBodyContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NotFound
