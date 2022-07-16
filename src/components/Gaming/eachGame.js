import {Link} from 'react-router-dom'

import './index.css'
import {
  GamingEachVideosImage,
  GamingEachVideoHeading,
  GamingEachVideoPara,
  GamingEachVideoContainer,
} from './styledComponents'

function EachGame(params) {
  const {details, darkMode} = params
  return (
    <GamingEachVideoContainer>
      <Link to={`/videos/${details.id}`} className="gamingEachVideoLink">
        <GamingEachVideosImage
          src={details.thumbnailUrl}
          alt="video thumbnail"
        />
        <GamingEachVideoHeading darkMode={darkMode}>
          {details.title}
        </GamingEachVideoHeading>
        <GamingEachVideoPara darkMode={darkMode}>
          {details.viewCount} Watching Worldwide
        </GamingEachVideoPara>
      </Link>
    </GamingEachVideoContainer>
  )
}

export default EachGame
