import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoGameController} from 'react-icons/io5'

import './index.css'
import EachGame from './eachGame'
import NoResults from '../NoResults/index'
import ThemeContext from '../../Context/nxtWatchContext'
import Header from '../Header/index'
import HamMenu from '../Menu/index'
import {
  GamingBodyContainer,
  GamingVideosContainer,
  GamingBannerContainer,
  GamingLogoContainer,
  GamingMainHeading,
  GamingVideoErrorContainers,
  GamingVideosListContainer,
} from './styledComponents'

class Gaming extends Component {
  state = {status: 'INITIAL', videosList: []}

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({status: 'LOADING'})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccess(data.videos)
    } else if (response.status === 401 || response.status === 400) {
      this.setState({status: 'FAILED'})
    }
  }

  onSuccess = data => {
    const finalData = data.map(video => ({
      id: video.id,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      viewCount: video.view_count,
    }))
    this.setState({status: 'SUCCESS'})
    this.setState({videosList: finalData})
  }

  RenderVideosList = params => {
    const {theme} = params
    const {videosList, status} = this.state
    switch (status) {
      case 'LOADING':
        return (
          <div
            className="loader-container homeVideosLoader"
            data-testid="loader"
          >
            <Loader
              type="ThreeDots"
              color={theme ? '#ffffff' : '#00306e'}
              height="50"
              width="50"
            />
          </div>
        )
      case 'SUCCESS':
        return (
          <GamingVideosListContainer>
            {videosList.map(video => (
              <EachGame key={video.id} details={video} darkMode={theme} />
            ))}
          </GamingVideosListContainer>
        )
      case 'FAILED':
        return (
          <GamingVideoErrorContainers darkMode={theme}>
            <NoResults
              status="FAILED"
              darkMode={theme}
              onRetry={this.getVideos}
            />
          </GamingVideoErrorContainers>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <GamingBodyContainer>
                <HamMenu />
                <GamingVideosContainer theme={darkMode} data-testid="gaming">
                  <GamingBannerContainer theme={darkMode}>
                    <GamingLogoContainer
                      className="trendingLogoContainer"
                      theme={darkMode}
                    >
                      <IoGameController className="gamingImage" />
                    </GamingLogoContainer>
                    <GamingMainHeading theme={darkMode}>
                      Gaming
                    </GamingMainHeading>
                  </GamingBannerContainer>
                  <this.RenderVideosList theme={darkMode} />
                </GamingVideosContainer>
              </GamingBodyContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
