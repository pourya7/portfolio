import React from 'react';
import {Flex} from '@chakra-ui/core';

// Components
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Workflow from '../components/Workflow';
import Testimonials from '../components/Testimonials';

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
