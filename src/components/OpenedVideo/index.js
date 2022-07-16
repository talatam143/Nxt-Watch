import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiDislike} from 'react-icons/bi'
import {AiOutlineLike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Loader from 'react-loader-spinner'

import './index.css'
import NoResults from '../NoResults/index'
import showDate from '../GetDate/date'
import ThemeContext from '../../Context/nxtWatchContext'
import Header from '../Header/index'
import HamMenu from '../Menu/index'
import {
  OpenedVideoBodyContainer,
  OpenedVideoContainer,
  VideoTitlePara,
  PropertiesContainer,
  ViewAgeContainer,
  HorizontalLine,
  ChannelContainer,
  ChannelLogo,
  ChannelNameContainer,
  PropertiesPara,
  PropertiesButton,
  PropertiesButtonContainer,
  OpenedVideoErrorContainers,
  PropertiesDotPara,
  PropertiesDescriptionPara,
  AllVideoPropsContainer,
} from './styledComponents'

class OpenedVideo extends Component {
  state = {
    status: 'INITIAL',
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount = () => {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({status: 'LOADING'})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccess(data.video_details)
    } else if (response.status === 401 || response.status === 400) {
      this.setState({status: 'FAILED'})
    }
  }

  onSuccess = data => {
    const getAge = showDate(data.published_at)
    const finalData = {
      id: data.id,
      channelName: data.channel.name,
      channelLogo: data.channel.profile_image_url,
      channelSubscribersCount: data.channel.subscriber_count,
      description: data.description,
      publishedAt: getAge,
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      videoUrl: data.video_url,
      viewCount: data.view_count,
    }
    this.setState({status: 'SUCCESS'})

    this.setState({videoDetails: finalData})
  }

  like = () => {
    this.setState(oldState => ({isLiked: !oldState.isLiked, isDisliked: false}))
  }

  dislike = () => {
    this.setState(oldState => ({
      isDisliked: !oldState.isDisliked,
      isLiked: false,
    }))
  }

  RenderVideosList = params => {
    const {theme, addToSavedVideos, savedVideos} = params
    const {videoDetails, status, isLiked, isDisliked} = this.state

    this.saveVideo = () => {
      addToSavedVideos(videoDetails)
    }
    const isThere = savedVideos.filter(video => video.id === videoDetails.id)
    let saveStyle = false
    if (isThere.length > 0) {
      saveStyle = true
    }
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
          <>
            <ReactPlayer
              url={videoDetails.videoUrl}
              controls
              width="100%"
              height="70%"
              className="LargeOpenedVideoPlayer"
            />
            <ReactPlayer
              url={videoDetails.videoUrl}
              controls
              width="100%"
              height="40%"
              className="SmallOpenedVideoPlayer"
            />
            <AllVideoPropsContainer>
              <VideoTitlePara darkMode={theme}>
                {videoDetails.title}
              </VideoTitlePara>
              <PropertiesContainer>
                <ViewAgeContainer>
                  <PropertiesPara darkMode={theme}>
                    {videoDetails.viewCount} views
                  </PropertiesPara>
                  <PropertiesDotPara darkMode={theme}>.</PropertiesDotPara>
                  <PropertiesPara darkMode={theme}>
                    {videoDetails.publishedAt}
                  </PropertiesPara>
                </ViewAgeContainer>
                <PropertiesButtonContainer>
                  <PropertiesButton
                    darkMode={theme}
                    onClick={this.like}
                    like={isLiked}
                  >
                    <AiOutlineLike /> Like
                  </PropertiesButton>
                  <PropertiesButton
                    darkMode={theme}
                    onClick={this.dislike}
                    dislike={isDisliked}
                  >
                    <BiDislike /> DisLike
                  </PropertiesButton>
                  <PropertiesButton
                    darkMode={theme}
                    onClick={this.saveVideo}
                    isSaved={saveStyle}
                  >
                    <MdPlaylistAdd />
                    {saveStyle ? 'Saved' : 'Save'}
                  </PropertiesButton>
                </PropertiesButtonContainer>
              </PropertiesContainer>
              <HorizontalLine />
              <ChannelContainer>
                <ChannelLogo
                  src={videoDetails.channelLogo}
                  alt="channel logo"
                />
                <ChannelNameContainer>
                  <VideoTitlePara darkMode={theme}>
                    {videoDetails.channelName}
                  </VideoTitlePara>
                  <PropertiesPara darkMode={theme}>
                    {videoDetails.channelSubscribersCount} subscribers
                  </PropertiesPara>
                </ChannelNameContainer>
              </ChannelContainer>
              <PropertiesDescriptionPara darkMode={theme}>
                {videoDetails.description}
              </PropertiesDescriptionPara>
            </AllVideoPropsContainer>
          </>
        )
      case 'FAILED':
        return (
          <OpenedVideoErrorContainers darkMode={theme}>
            <NoResults
              status="FAILED"
              darkMode={theme}
              onRetry={this.getVideo}
            />
          </OpenedVideoErrorContainers>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkMode, addToSavedVideos, savedVideos} = value
          return (
            <>
              <Header />
              <OpenedVideoBodyContainer>
                <HamMenu />
                <OpenedVideoContainer
                  theme={darkMode}
                  data-testid="videoItemDetails"
                >
                  <this.RenderVideosList
                    theme={darkMode}
                    addToSavedVideos={addToSavedVideos}
                    savedVideos={savedVideos}
                  />
                </OpenedVideoContainer>
              </OpenedVideoBodyContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default OpenedVideo
