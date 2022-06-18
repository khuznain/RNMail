import React from 'react'
import { Note } from '@/models'
import { Box, Text } from '@/atoms'

export interface ListItemProps extends Note {}

const ListItem: React.FC<ListItemProps> = props => {
  return (
    <Box bg="$background">
      <Box bg="$background" px="lg" py="sm">
        <Text>{props.body}</Text>
      </Box>
    </Box>
  )
}

export default ListItem
