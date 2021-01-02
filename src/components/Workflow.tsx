import React from 'react';
import {Flex, Text, Heading, Image, useColorMode} from '@chakra-ui/core';

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
      <Flex
        flex="1"
        flexDir="column"
        justifyContent="center"
        textAlign={['center', 'center', 'left']}
      >
        <Heading as="h3" size="lg" mb={4}>
          Agile Workflow
        </Heading>
        <Text>Expericed with Scrum framework to manage complex projects with consistency</Text>
      </Flex>
    </Flex>
  );
};

export default Workflow;
