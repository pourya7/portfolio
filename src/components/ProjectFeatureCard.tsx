import React from 'react';
import {Flex, useColorMode} from '@chakra-ui/core';
import {motion} from 'framer-motion';

import {PROJECTS} from '../constants';

const MotionFlex = motion.custom(Flex);

interface IProjectFeatureCard {
  selectedId: number;
  onClick: () => void;
}

const ProjectFeatureCard: React.FC<IProjectFeatureCard> = ({
  selectedId,
  onClick,
}) => {
  const {colorMode} = useColorMode();
  return (
    <MotionFlex
      layoutId={`project-card-${selectedId}`}
      position='fixed'
      top='5%'
      left='5%'
      width='calc(100% - 10%)'
      height='90vh'
      p={2}
      bg={colorMode === 'light' ? 'white' : 'black'}
      zIndex={2}
      onClick={onClick}
    >
      <Flex flexDir='column'>
        <motion.h2>{PROJECTS[selectedId].productTitle}</motion.h2>
        <motion.h5>{PROJECTS[selectedId].company}</motion.h5>
      </Flex>
    </MotionFlex>
  );
};

export default ProjectFeatureCard;
