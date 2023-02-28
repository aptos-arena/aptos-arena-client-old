import React from 'react'

import { Heading, VStack, Text } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <VStack
      spacing={4}
    >
        <Heading
            fontSize="4xl"
            fontWeight="bold"
            color='blue.200'
        >
            Aptos Arena
        </Heading>
        <Text
          color='white'
        >
          Win by knocking your opponents off the stage!
        </Text>
    </VStack>
  )
}

export default Header