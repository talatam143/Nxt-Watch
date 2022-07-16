import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import NoResults from '../NoResults/index'
import EachVideo from './eachVideo'
import ThemeContext from '../../Context/nxtWatchContext'
import Header from '../Header/index'
import HamMenu from '../Menu/index'
import {
  HomeBodyContainer,
  HomeVideosContainer,
  HomeBannerContainer,
  LogoImage,
  PARA,
  PremiumButton,
  BannerImageContainer,
  HomeSearchInput,
  HomeSearchContainer,
  HomeSearchButton,
  HomeVideosApiContainer,
  HomeErrorContainers,
} from './styledComponents'
import './index.css'

class Home extends Component {
  state = {showBanner: true, search: '', status: 'INITIAL', videosList: []}

  componentDidMount = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({status: 'LOADING'})
    const {search} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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
    if (finalData.length === 0) {
      this.setState({status: 'EMPTY'})
    } else {
      this.setState({status: 'SUCCESS'})
    }
    this.setState({videosList: finalData})
  }

  handleSearch = e => {
    this.setState({search: e.target.value})
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  RenderVideosList = params => {
    const {theme} = params
    const {status, videosList} = this.state
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
          <HomeVideosApiContainer>
            {videosList.map(video => (
              <EachVideo key={video.id} video={video} darkMode={theme} />
            ))}
          </HomeVideosApiContainer>
        )
      case 'EMPTY':
        return (
          <HomeErrorContainers darkMode={theme}>
            <NoResults status="EMPTY" onRetry={this.getVideos} />
          </HomeErrorContainers>
        )
      case 'FAILED':
        return (
          <HomeErrorContainers darkMode={theme}>
            <NoResults
              status="FAILED"
              darkMode={theme}
              onRetry={this.getVideos}
            />
          </HomeErrorContainers>
        )
      default:
        return null
    }
  }

  render() {
    const {showBanner, search} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Header />
              <HomeBodyContainer>
                <HamMenu />
                <HomeVideosContainer theme={darkMode} data-testid="home">
                  {showBanner && (
                    <HomeBannerContainer data-testid="banner">
                      <BannerImageContainer>
                        <LogoImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <button
                          type="button"
                          data-testid="close"
                          className="homeBannerCloseButton"
                        >
                          <IoMdClose
                            className="bannerCloseButton"
                            onClick={this.closeBanner}
                          />
                        </button>
                      </BannerImageContainer>
                      <PARA>Buy Nxt Watch Premium prepaid plans with UPI</PARA>
                      <PremiumButton>GET IT NOW</PremiumButton>
                    </HomeBannerContainer>
                  )}
                  <HomeSearchContainer>
                    <HomeSearchInput
                      type="search"
                      placeholder="Search"
                      theme={darkMode}
                      onChange={this.handleSearch}
                      value={search}
                    />
                    <HomeSearchButton
                      theme={darkMode}
                      onClick={this.getVideos}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch />
                    </HomeSearchButton>
                  </HomeSearchContainer>
                  <this.RenderVideosList theme={darkMode} />
                </HomeVideosContainer>
              </HomeBodyContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
