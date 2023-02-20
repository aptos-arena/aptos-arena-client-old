import React from 'react'

import { Kbd, VStack, Text } from '@chakra-ui/react'

const Shoot: React.FC = () => {
  return (
    <VStack>
        <Text
            fontSize='sm'
            fontWeight='semibold'
        >
            Shoot
        </Text>
        <Kbd>Right Shift</Kbd>
    </VStack>
  )
}

export default Shoot