import {Link} from 'react-router-dom'

import './index.css'
import {
  SavedEachVideoContainer,
  SavedEachVideoImage,
  SavedEachVideoSubContainer,
  SavedEachVideoViewCountContainer,
  SavedEachVideoHeading,
  SavedEachVideoPara,
  SavedEachVideoDotPara,
  SavedEachVideoChannelLogo,
  SavedEachVideoSmallContainer,
  SavedEachVideoSmallPara,
} from './styledComponents'

function EachVideo(params) {
  const {details, darkMode} = params
  return (
    <Link to={`/videos/${details.id}`} className="savedEachVideoLink">
      <SavedEachVideoContainer>
        <SavedEachVideoImage src={details.thumbnailUrl} alt="video thumbnail" />
        <SavedEachVideoSubContainer>
          <SavedEachVideoChannelLogo
            src={details.channelLogo}
            alt="channel Logo"
          />
          <div>
            <SavedEachVideoHeading darkMode={darkMode}>
              {details.title}
            </SavedEachVideoHeading>
            <SavedEachVideoSmallContainer>
              <SavedEachVideoSmallPara darkMode={darkMode}>
                {details.channelName}
              </SavedEachVideoSmallPara>
              <SavedEachVideoDotPara darkMode={darkMode}>
                .
              </SavedEachVideoDotPara>
              <SavedEachVideoSmallPara darkMode={darkMode}>
                {details.viewCount}
              </SavedEachVideoSmallPara>
              <SavedEachVideoDotPara darkMode={darkMode}>
                .
              </SavedEachVideoDotPara>
              <SavedEachVideoSmallPara darkMode={darkMode}>
                {details.publishedAt}
              </SavedEachVideoSmallPara>
            </SavedEachVideoSmallContainer>
            <SavedEachVideoPara darkMode={darkMode}>
              {details.channelName}
            </SavedEachVideoPara>
            <SavedEachVideoViewCountContainer>
              <SavedEachVideoPara darkMode={darkMode}>
                {details.viewCount}
              </SavedEachVideoPara>
              <SavedEachVideoDotPara darkMode={darkMode}>
                .
              </SavedEachVideoDotPara>
              <SavedEachVideoPara darkMode={darkMode}>
                {details.publishedAt}
              </SavedEachVideoPara>
            </SavedEachVideoViewCountContainer>
          </div>
        </SavedEachVideoSubContainer>
      </SavedEachVideoContainer>
    </Link>
  )
}

export default EachVideo
