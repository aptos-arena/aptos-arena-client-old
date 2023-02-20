import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Header: React.FC = () => {
  return (
    <VStack>
        <Text
            fontSize="2xl"
            fontWeight="bold"
        >
            Welcome to the Pontem Arena
        </Text>
        <Text>
            Team up with your favorite Aptos NFT collection to compete for glory and prizes!
        </Text>
    </VStack>
  )
}

export default Header