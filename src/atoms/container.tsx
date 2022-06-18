import * as React from 'react'
import { BoxProps } from '@shopify/restyle'
//
import { Box } from '@/atoms'
import { Theme } from '@/themes'

const Container: React.FC<BoxProps<Theme>> = props => {
  return (
    <Box {...props} flex={1} bg="$background">
      {props.children}
    </Box>
  )
}

export default Container
