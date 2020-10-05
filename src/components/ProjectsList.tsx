import React from 'react';
import {Flex, useColorMode} from '@chakra-ui/core';
import {motion} from 'framer-motion';

import {PROJECTS} from '../constants';

const MotionFlex = motion.custom(Flex);

interface IProjectsList {
  onClick: (id: number) => void;
}

const ProjectsList: React.FC<IProjectsList> = ({onClick}) => {
  const {colorMode} = useColorMode();
  return (
    <>
      {PROJECTS.map((project, index) => (
        <MotionFlex
          key={`project-${index}`}
          layoutId={`project-card-${index}`}
          flexDirection='column'
          flex={1}
          flexWrap='wrap'
          p={2}
          bg={colorMode === 'light' ? 'white' : 'gray.900'}
          onClick={() => onClick(index)}
        >
          <motion.h2>{project.productTitle}</motion.h2>
          <motion.h5>{project.company}</motion.h5>
        </MotionFlex>
      ))}
    </>
  );
};

export default ProjectsList;
