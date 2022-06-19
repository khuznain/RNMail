import React, { useCallback } from 'react'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { createBox } from '@shopify/restyle'
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import { Theme } from '@/themes'
import NoteListItem from './note-list-item'
import NOTES from '@/fixtures/notes'
import { Box } from '@/atoms'
import { Note } from '@/models'

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
)

interface Props {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (noteId: string) => void
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void
}

const NoteList: React.FC<Props> = ({
  onScroll,
  contentInsetTop,
  onItemPress,
  onItemSwipeLeft
}) => {
  const renderItem = useCallback(
    ({ item }) => {
      return (
        <NoteListItem
          {...item}
          onPress={onItemPress}
          onSwipeLeft={onItemSwipeLeft}
        />
      )
    },
    [onItemPress, onItemSwipeLeft]
  )

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
    />
  )
}

export default NoteList
