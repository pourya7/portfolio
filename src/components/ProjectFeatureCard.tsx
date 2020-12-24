import React from 'react';
import {Flex, Image} from '@chakra-ui/core';
import {motion} from 'framer-motion';

import {PROJECTS} from '../constants';

const MotionFlex = motion.custom(Flex);

interface IProjectFeatureCard {
  selectedId: number;
  onClick: () => void;
}

const ProjectFeatureCard: React.FC<IProjectFeatureCard> = ({selectedId, onClick}) => {
  return (
    <MotionFlex
      layoutId={`project-card-${selectedId}`}
      position="fixed"
      top="5%"
      left="5%"
      width="calc(100% - 10%)"
      height="90vh"
      zIndex={2}
      onClick={onClick}
    >
      <Image
        src={PROJECTS[selectedId].productImage}
        width="100%"
        height="100%"
        objectFit="contain"
      />
    </MotionFlex>
  );
};

export default ProjectFeatureCard;
