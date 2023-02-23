import React from 'react'

import { VStack, HStack, Text, Flex } from '@chakra-ui/react'

import { ControlType } from './controls'
import Key from './Key'

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
                    fontSize='xs'
                    fontWeight='semibold'
                    color='blue.200'
                    textAlign='center'
                    whiteSpace='nowrap'
                >
                    {control.name}
                </Text>
                <HStack>
                    {
                        control.keys.map((key) => (
                            <Key
                                key={key}
                                keyDisplay={key}
                            />
                        ))
                    }
                </HStack>
            </VStack>
        </Flex>
    )
}

export default Control