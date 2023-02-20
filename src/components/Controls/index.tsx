import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Jump from './Jump'

import Movement from './Movement'
import Shoot from './Shoot'

const Controls: React.FC = () => {
  return (
    <VStack
        spacing={4}
    >
        <Text
            fontSize="xl"
            fontWeight="bold"
        >
            Controls
        </Text>
        <HStack
            spacing={8}
        >
            <Movement />
            <Jump />
            <Shoot />
        </HStack>
    </VStack>
  )
}

export default Controls