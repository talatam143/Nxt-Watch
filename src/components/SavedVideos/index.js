import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'

import EachVideo from './eachVideo'
import NoResults from '../NoResults/index'
import './index.css'
import Header from '../Header/index'
import HamMenu from '../Menu/index'
import {
  SavedBodyContainer,
  SavedVideosContainer,
  SavedBannerContainer,
  SavedMainHeading,
  SavedLogoContainer,
  SavedVideoErrorContainers,
  SavedVideosListContainer,
} from './styledComponents'
import ThemeContext from '../../Context/nxtWatchContext'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode, savedVideos} = value
          return (
            <>
              <Header />
              <SavedBodyContainer>
                <HamMenu />
                <SavedVideosContainer theme={darkMode}>
                  <SavedBannerContainer theme={darkMode}>
                    <SavedLogoContainer theme={darkMode}>
                      <MdPlaylistAdd className="savedImage" />
                    </SavedLogoContainer>
                    <SavedMainHeading theme={darkMode}>
                      Saved Videos
                    </SavedMainHeading>
                  </SavedBannerContainer>
                  {savedVideos.length === 0 ? (
                    <SavedVideoErrorContainers darkMode={darkMode}>
                      <NoResults status="NOSAVED" darkMode={darkMode} />
                    </SavedVideoErrorContainers>
                  ) : (
                    <SavedVideosListContainer data-testid="savedVideos">
                      {savedVideos.map(video => (
                        <EachVideo
                          key={video.id}
                          details={video}
                          darkMode={darkMode}
                        />
                      ))}
                    </SavedVideosListContainer>
                  )}
                </SavedVideosContainer>
              </SavedBodyContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
