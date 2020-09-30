import React from 'react';
import {Flex, Image, Link, useColorMode} from '@chakra-ui/core';

import {SOCIAL_MEDIA} from '../constants';

const Footer: React.FC = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex
      bg={colorMode === 'light' ? 'white' : 'gray.900'}
      color={colorMode === 'light' ? 'gray.700' : 'white'}
      width='100%'
      minHeight='10vh'
      px={[2, 8, 8, 64]}
      py={2}
      direction='column'
    >
      <Flex justifyContent='center'>
        {SOCIAL_MEDIA.map(item => (
          <Link key={item.name} href={item.link} target='_blank' mr={1}>
            <Image src={item.logo} alt={item.name} size={8} />
          </Link>
        ))}
      </Flex>
      <Flex justifyContent='center'>© 2019-2020 Pourya Da</Flex>
    </Flex>
  );
};

export default Footer;
