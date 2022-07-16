import {Component} from 'react'
import {FaFire} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import EachVideo from './eachVideo'
import NoResults from '../NoResults/index'
import './index.css'
import Header from '../Header/index'
import HamMenu from '../Menu/index'
import {
  TrendingBodyContainer,
  TrendingVideosContainer,
  TrendingBannerContainer,
  TrendingMainHeading,
  TrendingLogoContainer,
  TrendingVideoErrorContainers,
  TrendingVideosListContainer,
} from './styledComponents'
import ThemeContext from '../../Context/nxtWatchContext'

class Trending extends Component {
  state = {status: 'INITIAL', videosList: []}

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({status: 'LOADING'})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
      channelName: video.channel.name,
      channelLogo: video.channel.profile_image_url,
      publishedDate: video.published_at,
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
          <TrendingVideosListContainer>
            {videosList.map(video => (
              <EachVideo key={video.id} details={video} darkMode={theme} />
            ))}
          </TrendingVideosListContainer>
        )
      case 'FAILED':
        return (
          <TrendingVideoErrorContainers darkMode={theme}>
            <NoResults
              status="FAILED"
              darkMode={theme}
              onRetry={this.getVideos}
            />
          </TrendingVideoErrorContainers>
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
              <TrendingBodyContainer>
                <HamMenu />
                <TrendingVideosContainer
                  theme={darkMode}
                  data-testid="trending"
                >
                  <TrendingBannerContainer theme={darkMode}>
                    <TrendingLogoContainer
                      className="trendingLogoContainer"
                      theme={darkMode}
                    >
                      <FaFire className="trendingImage" />
                    </TrendingLogoContainer>
                    <TrendingMainHeading theme={darkMode}>
                      Trending
                    </TrendingMainHeading>
                  </TrendingBannerContainer>
                  <this.RenderVideosList theme={darkMode} />
                </TrendingVideosContainer>
              </TrendingBodyContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
