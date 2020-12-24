import React from 'react';
import {Flex} from '@chakra-ui/core';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Method from '../components/Method';
import Workflow from '../components/Workflow';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
// import Testimonials from '../components/Testimonials';

const App: React.FC = () => (
  <Flex direction="column">
    <Header />
    <Hero />
    <Companies />
    <Method />
    <Workflow />
    <Projects />
    {/* <Testimonials /> */}
    <Footer />
  </Flex>
);

export default App;
