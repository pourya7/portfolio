import React from 'react';
import {Flex} from '@chakra-ui/core';

import {
  Footer,
  Header,
  Hero,
  Projects,
  Testimonials,
  Workflow,
} from '../components';

const App: React.FC = () => (
  <Flex direction='column'>
    <Header />
    <Hero />
    <Projects />
    <Workflow />
    <Testimonials />
    <Footer />
  </Flex>
);

export default App;
