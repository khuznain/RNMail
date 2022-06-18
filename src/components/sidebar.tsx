import * as React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { SafeAreaView } from 'react-native'
import { Box, Text } from '@/atoms'

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          M-I-A-L
        </Text>
      </SafeAreaView>
    </Box>
  )
}

export default Sidebar
