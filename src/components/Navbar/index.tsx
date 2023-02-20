import React from 'react';

import {
    Flex,
    HStack,
    Text
} from '@chakra-ui/react'

import ConnectWallet from './ConnectWallet';
import ColorModeToggle from './ColorModeToggle';

export const navbarHeight = 20;
  
const Navbar : React.FC = () => {    
    return (
        <Flex
            position='absolute'
            top={0}
            left={0}
            right={0}
            zIndex={100}
            height={navbarHeight}
            w='100%'
            gap={8}
            alignItems='center'
            p={4}
        >
            <Text
                fontWeight='bold'
                fontSize='2xl'
            >
                Pontem Smash
            </Text>
            <HStack 
                flex={1}
                justifyContent='flex-end'
            >
                <ConnectWallet />
                <ColorModeToggle />
            </HStack>
        </Flex>
    );
};

export default Navbar