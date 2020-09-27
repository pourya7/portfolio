import React from 'react';
import {Flex} from '@chakra-ui/core';

import {Footer, Header, Hero, Projects, Testimonials} from '../components';

const App: React.FC = () => (
  <Flex direction='column'>
    <Header />
    <Hero />
    <Projects />
    <Testimonials />
    <Footer />
  </Flex>
);

export default App;
