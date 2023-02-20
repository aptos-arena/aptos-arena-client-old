import React from 'react'

import { Heading, HStack, VStack } from '@chakra-ui/react'

import Control from './Control'
import { controls } from './controls'

const Controls: React.FC = () => {
  return (
    <VStack
        spacing={8}
    >
        <Heading
            fontSize="xl"
            fontWeight="bold"
            color='blue.100'
        >
            Controls
        </Heading>
        <HStack
            spacing={8}
            w='100%'
            justifyContent='space-around'
        >
            {
                controls.map((control, index) => (
                    <Control 
                        key={index}
                        control={control}
                    />
                ))
            }
        </HStack>
    </VStack>
  )
}

export default Controls