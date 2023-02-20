import React from 'react'

import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Navbar, { navbarHeight } from '../Navbar';

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    const bgColor = useColorModeValue('gray.50', 'navy.900');

    return (
        <Box
            minHeight='100vh'
            minWidth='100vw'
            bg='navy.900'
        >
            <Navbar />
            <Container
                maxW='4xl'
                display='flex'
                flexDirection='column'
                pt={navbarHeight + 8}
                pb={16}
                gap={8}
            >
                {children}
            </Container>
        </Box>
    )
}

export default Layout