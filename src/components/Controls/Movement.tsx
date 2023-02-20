import React from 'react'

import { VStack, HStack, Kbd, Text } from '@chakra-ui/react'

const Movement: React.FC = () => {
  return (
    <VStack>
        <Text
            fontSize='sm'
            fontWeight='semibold'
        >
            Movement
        </Text>
        <HStack>
            <Kbd>A</Kbd>
            <Kbd>D</Kbd>
        </HStack>
    </VStack>
  )
}

export default Movement