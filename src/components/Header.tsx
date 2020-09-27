import React from 'react';
import {Heading, Flex, Text} from '@chakra-ui/core';

const Header: React.FC = () => (
  <Flex
    as='nav'
    align='center'
    justify='space-between'
    wrap='nowrap'
    padding='0.5rem'
    bg='white'
    color='black'
    width='100%'
    height='64px'
    px={[2, 8, 8, 64]}
    ml='auto'
    mr='auto'
  >
    <Flex align='center' mr={5}>
      <Heading as='h1' size='lg' letterSpacing={'-.1rem'} mr={2}>
        Pourya Da
      </Heading>
      <Text
        as='sub'
        color='gray.500'
        textTransform='uppercase'
        fontWeight='bold'
      >
        Frontend Developer
      </Text>
    </Flex>
  </Flex>
);

export default Header;
