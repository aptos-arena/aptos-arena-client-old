import React from 'react';

import { ChakraProvider, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <ChakraProvider>
      <Container
        py={16}
      >
        <Header />
        <Game />
      </Container>
    </ChakraProvider>
  );
}

export default App;
