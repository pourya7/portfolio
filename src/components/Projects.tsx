import React, {useState} from 'react';
import {Flex, useColorMode} from '@chakra-ui/core';
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
      width='100%'
      minHeight='100vh'
      alignItems='flex-start'
      bg={colorMode === 'light' ? 'gray.50' : ''}
      px={[2, 8, 8, 64]}
      py={8}
    >
      {/* <AnimateSharedLayout type='crossfade'> */}
      <AnimateSharedLayout type='switch'>
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
  );
};

export default Projects;
