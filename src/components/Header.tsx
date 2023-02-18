import React from 'react'

import { Text, VStack } from '@chakra-ui/react'

const Header = () => {
  return (
    <VStack>
        <Text
            fontWeight='bold'
            fontSize='2xl'
        >
            Welcome to Jason's Game
        </Text>
    </VStack>
  )
}

export default Header