import './index.css'

function NoResults(params) {
  const {status, darkMode, onRetry} = params
  const details = {H1: '', PARA: '', SRC: '', ALT: ''}
  let showButton = true

  if (status === 'NOTFOUND' || status === 'NOSAVED') {
    showButton = false
  }

  const darkImage = darkMode
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

  const darkNotFound = darkMode
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  if (status === 'EMPTY') {
    details.H1 = 'No Search results found'
    details.PARA = 'Try Different key words or remove search filter'
    details.SRC =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
    details.ALT = 'no videos'
  } else if (status === 'FAILED') {
    details.H1 = 'Oops! Something Went Wrong'
    details.PARA =
      'We are having some trouble to complete your request. Please try again.'
    details.SRC = darkImage
    details.ALT = 'failure view'
  } else if (status === 'NOSAVED') {
    details.H1 = 'No saved videos found'
    details.PARA = 'You can save your videos while watching them'
    details.SRC =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
    details.ALT = 'no saved videos'
  } else if (status === 'NOTFOUND') {
    details.H1 = 'Page Not Found'
    details.PARA = 'we are sorry, the page you requested could not be found.'
    details.SRC = darkNotFound
    details.ALT = 'not found'
  }

  return (
    <>
      <img
        src={details.SRC}
        alt={details.ALT}
        className="HomeErrorImage"
        style={{marginBottom: '1px'}}
      />
      <h1 style={{marginBottom: '5px'}}>{details.H1} </h1>
      <p>{details.PARA}</p>
      {showButton && (
        <button
          type="button"
          className="HomeErrorRetryButton"
          onClick={onRetry}
        >
          Retry
        </button>
      )}
    </>
  )
}

export default NoResults
