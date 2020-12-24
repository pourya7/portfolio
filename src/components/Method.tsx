import React from 'react';
import {Box, Flex, Heading, Image, useColorMode} from '@chakra-ui/core';

const Method: React.FC = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex
      bg={colorMode === 'light' ? 'white' : ''}
      width="100%"
      minHeight="100px"
      px={[2, 8, 8, 64]}
      py={8}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box textAlign="center">
        <Heading as="h6" size="xs" textDecoration="double salmon underline 2px" mb={4}>
          Planning
        </Heading>
        <Image height="100px" src="./img/planning.svg" />
      </Box>
      <Box textAlign="center">
        <Heading as="h6" size="xs" textDecoration="double salmon underline 2px" mb={4}>
          Teamwork
        </Heading>
        <Image height="100px" src="./img/team.svg" />
      </Box>
      <Box textAlign="center">
        <Heading as="h6" size="xs" textDecoration="double salmon underline 2px" mb={4}>
          Delivery
        </Heading>
        <Image height="100px" src="./img/delivery.svg" />
      </Box>
    </Flex>
  );
};

export default Method;
