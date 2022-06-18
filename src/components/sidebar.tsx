import * as React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { View, Text } from 'react-native'

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text>Sidebar</Text>
    </View>
  )
}

export default Sidebar
