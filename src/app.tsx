import React from 'react'
import { useAtom } from 'jotai'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import StatusBar from '@/components/status-bar'
import { activeThemeAtom } from './states/theme'
import Navigations from './navs'

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom)
  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
