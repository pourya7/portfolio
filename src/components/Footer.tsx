import React from 'react';
import {Flex, Link, useColorMode} from '@chakra-ui/core';

import {SOCIAL_MEDIA} from '../constants';

const Footer: React.FC = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="nowrap"
      bg={colorMode === 'light' ? 'white' : 'gray.900'}
      color={colorMode === 'light' ? 'gray.700' : 'white'}
      width="100%"
      minHeight="10vh"
      px={[2, 8, 8, 64]}
      py={2}
      ml="auto"
      mr="auto"
    >
      <Flex align="center">© {new Date().getFullYear()} Pourya Da. All Rights Reserved.</Flex>
      <Flex align="center">
        {SOCIAL_MEDIA.map(item => (
          <Link
            key={item.name}
            href={item.link}
            isExternal
            textDecoration="double underline 2px"
            mr={2}
            _hover={{textDecoration: 'double salmon underline 2px'}}
          >
            {item.name}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
