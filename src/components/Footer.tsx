import React from 'react';
import {Flex, Heading, Image, Link} from '@chakra-ui/core';

import {SOCIAL_MEDIA} from '../constants';

const Footer: React.FC = () => (
  <Flex
    bg='black'
    color='white'
    width='100%'
    height='20vh'
    px={[2, 8, 8, 64]}
    py={8}
    wrap='wrap'
  >
    <Heading as='h1' color='gray.300'>
      Contacts
    </Heading>
    <Flex flex={1} justifyContent='flex-end'>
      {SOCIAL_MEDIA.map(item => (
        <Flex
          key={item.name}
          rounded='lg'
          bg='gray.300'
          mr={8}
          width='150px'
          alignItems='center'
          justifyContent='center'
        >
          <Link href={item.link} target='_blank'>
            <Image src={item.logo} alt={item.name} size={12} />
          </Link>
        </Flex>
      ))}
    </Flex>
  </Flex>
);

export default Footer;
