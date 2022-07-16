import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute/protectedRoute'
import './App.css'
import Login from './components/Login/index'
import Home from './components/Home/index'
import ThemeContext from './Context/nxtWatchContext'
import OpenedVideo from './components/OpenedVideo/index'
import Trending from './components/Trending/index'
import Gaming from './components/Gaming/index'
import SavedVideos from './components/SavedVideos/index'
import NotFound from './components/PageNotFound/index'

class App extends Component {
  state = {darkMode: true, savedVideos: []}

  changeTheme = () => {
    this.setState(oldState => ({
      darkMode: !oldState.darkMode,
    }))
  }

  addToSavedVideos = video => {
    const {savedVideos} = this.state
    const status = savedVideos.filter(saved => saved.id === video.id)
    if (status.length === 0) {
      this.setState(oldState => ({
        savedVideos: [...oldState.savedVideos, video],
      }))
    } else {
      const updatedList = savedVideos.filter(saved => saved.id !== video.id)
      this.setState({savedVideos: updatedList})
    }
  }

  render() {
    const {darkMode, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkMode,
          savedVideos,
          changeTheme: this.changeTheme,
          addToSavedVideos: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={OpenedVideo} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
