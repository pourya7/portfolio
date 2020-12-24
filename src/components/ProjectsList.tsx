import React from 'react';
import {Flex, Image, useColorMode} from '@chakra-ui/core';
import {motion} from 'framer-motion';

import {PROJECTS} from '../constants';

const MotionFlex = motion.custom(Flex);

interface IProjectsList {
  onClick: (id: number) => void;
}

const ProjectsList: React.FC<IProjectsList> = ({onClick}) => {
  const {colorMode} = useColorMode();
  return (
    <Flex flexWrap="wrap" flex={1}>
      {PROJECTS.map((project, index) => (
        <MotionFlex
          key={`project-${index}`}
          layoutId={`project-card-${index}`}
          flex="0 50%"
          p={2}
          cursor="pointer"
          whileHover={{scale: 1.025}}
          onClick={() => onClick(index)}
        >
          <Flex
            flex={1}
            flexDirection="column"
            flexWrap="wrap"
            bg={colorMode === 'light' ? 'white' : 'gray.900'}
            p={2}
            height="200px"
            pos="relative"
            overflow="hidden"
            borderRadius="16px"
            boxShadow={colorMode === 'light' ? '0 4px 24px 2px rgba(0,0,0,0.1)' : ''}
          >
            <Image
              src={project.cardImage}
              pos="absolute"
              top="0"
              right="0"
              width="100%"
              height="100%"
              objectFit="cover"
            />
            <Image src={project.companyLogo} width="50%" m="auto" zIndex={1} />
          </Flex>
        </MotionFlex>
      ))}
    </Flex>
  );
};

export default ProjectsList;
