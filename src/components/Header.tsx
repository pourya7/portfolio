import React from 'react';
import {Heading, Flex, Text, IconButton, useColorMode} from '@chakra-ui/core';

const Header: React.FC = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="nowrap"
      padding="0.5rem"
      bg={colorMode === 'light' ? 'white' : 'gray.900'}
      width="100%"
      height="64px"
      px={[2, 8, 8, 64]}
      ml="auto"
      mr="auto"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'} mr={2}>
          Pourya Da
        </Heading>
        <Text as="sub" color="gray.500" textTransform="uppercase" fontWeight="bold">
          Front-end Engineer
        </Text>
      </Flex>
      <IconButton
        aria-label={`Switch to ${colorMode} mode`}
        fontSize="20px"
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        color="gray.500"
        variant="ghost"
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;
