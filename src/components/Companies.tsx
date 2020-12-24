import React from 'react';
import {Flex, Image, useColorMode} from '@chakra-ui/core';

import {COMPANIES} from '../constants';

const Companies: React.FC = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex
      bg={colorMode === 'light' ? 'gray.50' : ''}
      width="100%"
      minHeight="100px"
      px={[2, 8, 8, 64]}
      py={8}
    >
      <Flex wrap="wrap">
        {COMPANIES.map(company => (
          <Image
            key={company.name}
            fallbackSrc={company.fallback}
            src={colorMode === 'light' ? company.logoDark : company.logoLight}
            alt={company.name}
            title={company.name}
            width="100px"
            objectFit="contain"
            mr={4}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Companies;
