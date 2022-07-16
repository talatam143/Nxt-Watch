import {Link} from 'react-router-dom'
import showDate from '../GetDate/date'
import './index.css'

function EachVideo(params) {
  const {video, darkMode} = params
  const {
    id,
    channelName,
    channelLogo,
    publishedDate,
    thumbnailUrl,
    title,
    viewCount,
  } = video
  const colorStyle = darkMode ? 'darkColor' : 'lightColor'
  const age = showDate(publishedDate)
  return (
    <div className="homeEachVideoContainer">
      <Link to={`/videos/${id}`} className={`homeEachVideoLinks ${colorStyle}`}>
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="homeEachVideoThumbnailLogo"
        />
        <div className="homeEachVideoSubContainer">
          <img
            src={channelLogo}
            alt="channel logo"
            className="homeEachVideoChannelLogo"
          />
          <div className="homeEachVideoTitleContainer">
            <p className="homeEachVideoTitlePara">{title}</p>
            <p className="homeEachVideoParas homeLargeChannelName">
              {channelName}
            </p>
            <div className="homeEachVideoViewsContainer">
              <p className="homeEachVideoParas homeSmallParas">{channelName}</p>
              <p className="homeEachVideoParas homeSmallParas homeDot">.</p>
              <p className="homeEachVideoParas">{viewCount} views</p>
              <p className="homeEachVideoParas homeDot">.</p>
              <p className="homeEachVideoParas">{age}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default EachVideo
