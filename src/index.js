import {
  ChakraProvider,
  ColorModeScript,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import Home from './pages/Home';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.500">
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="purple.400"
          minHeight={{ lg: '100vh' }}
          p={{ base: '20px', lg: '30px' }}
        >
          {/* <Sidebar /> */}
        </GridItem>
        <GridItem
          as="main"
          colSpan={{ base: 6, lg: 4, xl: 5 }}
          bg="gray.50"
          p="40px"
        >
          {/* <Navbar /> */}
          <Home />
        </GridItem>
      </Grid>
    </ChakraProvider>
    <ColorModeScript />
  </React.StrictMode>
);
