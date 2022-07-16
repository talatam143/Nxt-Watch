import {Link} from 'react-router-dom'

import './index.css'
import showDate from '../GetDate/date'
import {
  TrendingEachVideoContainer,
  TrendingEachVideoImage,
  TrendingEachVideoSubContainer,
  TrendingEachVideoViewCountContainer,
  TrendingEachVideoHeading,
  TrendingEachVideoPara,
  TrendingEachVideoDotPara,
  TrendingEachVideoChannelLogo,
  TrendingEachVideoSmallContainer,
  TrendingEachVideoSmallPara,
} from './styledComponents'

function EachVideo(params) {
  const {details, darkMode} = params
  const age = showDate(details.publishedDate)
  return (
    <Link to={`/videos/${details.id}`} className="trendingEachVideoLink">
      <TrendingEachVideoContainer>
        <TrendingEachVideoImage
          src={details.thumbnailUrl}
          alt="video thumbnail"
        />
        <TrendingEachVideoSubContainer>
          <TrendingEachVideoChannelLogo
            src={details.channelLogo}
            alt="channel Logo"
          />
          <div>
            <TrendingEachVideoHeading darkMode={darkMode}>
              {details.title}
            </TrendingEachVideoHeading>
            <TrendingEachVideoSmallContainer>
              <TrendingEachVideoSmallPara darkMode={darkMode}>
                {details.channelName}
              </TrendingEachVideoSmallPara>
              <TrendingEachVideoDotPara darkMode={darkMode}>
                .
              </TrendingEachVideoDotPara>
              <TrendingEachVideoSmallPara darkMode={darkMode}>
                {details.viewCount}
              </TrendingEachVideoSmallPara>
              <TrendingEachVideoDotPara darkMode={darkMode}>
                .
              </TrendingEachVideoDotPara>
              <TrendingEachVideoSmallPara darkMode={darkMode}>
                {age}
              </TrendingEachVideoSmallPara>
            </TrendingEachVideoSmallContainer>
            <TrendingEachVideoPara darkMode={darkMode}>
              {details.channelName}
            </TrendingEachVideoPara>
            <TrendingEachVideoViewCountContainer>
              <TrendingEachVideoPara darkMode={darkMode}>
                {details.viewCount}
              </TrendingEachVideoPara>
              <TrendingEachVideoDotPara darkMode={darkMode}>
                .
              </TrendingEachVideoDotPara>
              <TrendingEachVideoPara darkMode={darkMode}>
                {age}
              </TrendingEachVideoPara>
            </TrendingEachVideoViewCountContainer>
          </div>
        </TrendingEachVideoSubContainer>
      </TrendingEachVideoContainer>
    </Link>
  )
}

export default EachVideo
