import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './navs'
import { ThemeProvider } from '@shopify/restyle'
import light from './themes/light'
import StatusBar from './components/status-bar'

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar />
        <Navigation />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
