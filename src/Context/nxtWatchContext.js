import React from 'react'

const ThemeContext = React.createContext({
  darkMode: true,
  savedVideos: [],
  changeTheme: () => {},
  addToSavedVideos: () => {},
})

export default ThemeContext
