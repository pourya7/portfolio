import React, {useState} from 'react';
import {Flex, Heading, useColorMode} from '@chakra-ui/core';
import {AnimatePresence, AnimateSharedLayout} from 'framer-motion';

// Components
import Backdrop from './Backdrop';
import ProjectsList from './ProjectsList';
import ProjectFeatureCard from './ProjectFeatureCard';

const Projects: React.FC = () => {
  const {colorMode} = useColorMode();
  const [selectedId, setSelectedId] = useState<number>();
  return (
    <Flex
      width="100%"
      minHeight="50vh"
      alignItems="flex-start"
      bg={colorMode === 'light' ? 'gray.50' : ''}
      px={[2, 8, 8, 64]}
      py={8}
      direction="column"
    >
      <Heading textAlign="center" width="100%" mb={8} textDecoration="double salmon underline 4px">
        PROJECTS
      </Heading>
      <Flex direction="column" width="100%">
        {/* <AnimateSharedLayout type='switch'> */}
        <AnimateSharedLayout type="crossfade">
          <ProjectsList onClick={setSelectedId} />
          <AnimatePresence>
            {selectedId != null ? (
              <>
                <Backdrop onClick={() => setSelectedId(undefined)} />
                <ProjectFeatureCard
                  selectedId={selectedId}
                  onClick={() => setSelectedId(undefined)}
                />
              </>
            ) : null}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Flex>
    </Flex>
  );
};

export default Projects;
