import React from 'react';
import {Avatar, Flex, Heading, Text, useColorMode} from '@chakra-ui/core';
import {motion} from 'framer-motion';

import {TESTIMONIALS} from '../constants';

const TestimonialCard = motion.custom(Flex);

const Testimonials: React.FC = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex
      bg={colorMode === 'light' ? 'gray.50' : ''}
      width='100%'
      minHeight='90vh'
      px={[2, 8, 8, 64]}
      py={8}
      justifyContent='space-around'
      wrap='wrap'
    >
      {TESTIMONIALS.map((person, index) => (
        <TestimonialCard
          key={person.name + index}
          position='relative'
          px={4}
          py={10}
          bg={colorMode === 'light' ? 'white' : ''}
          color={colorMode === 'light' ? 'gray.700' : 'white'}
          width='320px'
          height='160px'
          boxShadow={
            colorMode === 'light' ? '0 4px 24px 2px rgba(0,0,0,0.1)' : ''
          }
          border={
            colorMode === 'light' ? '' : '2px solid rgba(255,255,255,0.15)'
          }
          textAlign='center'
          direction='column'
          rounded='md'
          m={8}
          whileHover={{scale: 1.05}}
        >
          <Avatar
            position='absolute'
            top='-24px'
            right='50%'
            marginRight='-24px'
            boxShadow='0 4px 8px 0px rgba(0,0,0,0.5)'
            name={person.name}
            src={person.image}
          />
          <Heading as='h6' size='xs' color='blue.500' mb={4}>
            {person.title} @ {person.company}
          </Heading>
          <Text>{person.testimonial}</Text>
        </TestimonialCard>
      ))}
    </Flex>
  );
};

export default Testimonials;
