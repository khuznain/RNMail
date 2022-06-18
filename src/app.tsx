import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigations from './navs'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <NavigationContainer>
      <Navigations />
      {/* <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red'
        }}
      >
        <Text>Khalid</Text>
      </View> */}
    </NavigationContainer>
  )
}

export default App
