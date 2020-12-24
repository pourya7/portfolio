import React from 'react';
import {Flex, Image, useColorMode} from '@chakra-ui/core';

const Workflow: React.FC = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex
      bg={colorMode === 'light' ? 'white' : ''}
      width="100%"
      minHeight="50vh"
      px={[2, 8, 8, 64]}
      py={8}
      flexDirection={['column', 'column', 'row', 'row']}
    >
      <Flex alignItems="center" width={['100%', '100%', '60%', '60%']}>
        <Image src="img/workflow.svg" alt="Workflow" width="100%" />
      </Flex>
      <Flex flex="1">Some text here</Flex>
    </Flex>
  );
};

export default Workflow;
