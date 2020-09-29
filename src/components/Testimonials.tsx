import React from 'react';
import {Avatar, Flex, Heading, Text} from '@chakra-ui/core';
import {TESTIMONIALS} from '../constants';

const Testimonials: React.FC = () => (
  <Flex
    bg='gray.100'
    width='100%'
    minHeight='90vh'
    px={[2, 8, 8, 64]}
    py={8}
    justifyContent='space-around'
    wrap='wrap'
  >
    {TESTIMONIALS.map(person => (
      <Flex
        key={person.name}
        position='relative'
        px={4}
        py={10}
        bg='white'
        width='320px'
        height='160px'
        boxShadow='0 4px 24px 2px rgba(0,0,0,0.1)'
        textAlign='center'
        direction='column'
        rounded='md'
        m={8}
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
        <Text color='gray.700'>{person.testimonial}</Text>
      </Flex>
    ))}
  </Flex>
);

export default Testimonials;
