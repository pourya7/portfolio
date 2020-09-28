import React from 'react';
import {Flex, Image, Link} from '@chakra-ui/core';

import {SOCIAL_MEDIA} from '../constants';

const Footer: React.FC = () => (
  <Flex
    width='100%'
    minHeight='10vh'
    px={[2, 8, 8, 64]}
    py={2}
    direction='column'
  >
    <Flex justifyContent='center'>
      {SOCIAL_MEDIA.map(item => (
        <Link href={item.link} target='_blank' mr={1}>
          <Image src={item.logo} alt={item.name} size={8} />
        </Link>
      ))}
    </Flex>
    <Flex justifyContent='center'>© 2019-2020 Pourya Da</Flex>
  </Flex>
);

export default Footer;
