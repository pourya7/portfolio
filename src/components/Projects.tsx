import React from 'react';
import {Flex, useColorMode} from '@chakra-ui/core';

const Projects: React.FC = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex
      bg={colorMode === 'light' ? 'gray.50' : ''}
      width='100%'
      minHeight='100vh'
      px={[2, 8, 8, 64]}
      py={8}
    >
      Projects
    </Flex>
  );
};

export default Projects;
