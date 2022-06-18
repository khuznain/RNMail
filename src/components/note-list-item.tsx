import React from 'react'
import { Note } from '@/models'
import { Box, Text } from '@/atoms'

export interface ListItemProps extends Note {}

const ListItem: React.FC<ListItemProps> = props => {
  return (
    <Box bg="$background">
      <Box bg="$background" px="lg" py="sm">
        <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold" mb="xs">
          {props.title}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          opacity={0.7}
          fontSize={16}
        >
          {props.body}
        </Text>
      </Box>
    </Box>
  )
}

export default ListItem
