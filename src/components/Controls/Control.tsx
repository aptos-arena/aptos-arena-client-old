import React from 'react'

import { VStack, HStack, Kbd, Text, Flex } from '@chakra-ui/react'

import { ControlType } from './controls'

interface Props {
    control: ControlType
}

const Control: React.FC<Props> = ({ control }) => {
  return (
    <Flex
        flex={1}
        justifyContent='center'
    >
        <VStack>
            <Text
                fontSize='sm'
                fontWeight='semibold'
            >
                {control.name}
            </Text>
            <HStack>
                {
                    control.keys.map((key) => (
                        <Kbd
                            key={key}
                            fontSize='16px'
                            fontFamily={`'Press Start 2P', sans-serif`}
                            // bg='blue.100'
                            color='blue.100'
                            p={2}
                        >
                            {key}
                        </Kbd>
                    ))
                }
            </HStack>
        </VStack>
    </Flex>
  )
}

export default Control