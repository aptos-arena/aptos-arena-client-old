import React from 'react'

import { Text, VStack } from '@chakra-ui/react'

const Header = () => {
  return (
    <VStack
      spacing={4}
    >
        <Text
            fontWeight='bold'
            fontSize='2xl'
        >
          Welcome to Jason's Game
        </Text>
        <Text
          textAlign='center'
        >
          This is a simple PvP shooter game using Photon PUN2 for synchronous online multiplayer. Use WASD for movement, right shift to shoot, and tab to see players online.
        </Text>
    </VStack>
  )
}

export default Header