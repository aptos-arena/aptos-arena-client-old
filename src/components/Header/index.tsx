import React from 'react'

import { Heading, VStack } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <VStack>
        <Heading
            fontSize="4xl"
            fontWeight="bold"
            color='blue.200'
        >
            Aptos Arena
        </Heading>
    </VStack>
  )
}

export default Header