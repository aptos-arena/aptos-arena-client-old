import React from 'react'

import { VStack, Text, Kbd } from '@chakra-ui/react'

const Jump: React.FC = () => {
  return (
    <VStack>
        <Text
            fontSize='sm'
            fontWeight='semibold'
        >
            Jump
        </Text>
        <Kbd>
            Space
        </Kbd>
    </VStack>
  )
}

export default Jump