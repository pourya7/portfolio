import React from 'react';
import {Box, useColorMode} from '@chakra-ui/core';
import {motion} from 'framer-motion';

const MotionBox = motion.custom(Box);

interface IBackdrop {
  onClick: () => void;
}

const Backdrop: React.FC<IBackdrop> = ({onClick}) => {
  const {colorMode} = useColorMode();
  return (
    <MotionBox
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      position='fixed'
      top='0'
      left='0'
      bottom='0'
      right='0'
      bg={colorMode === 'light' ? 'gray.200' : 'gray.900'}
      zIndex={1}
      onClick={onClick}
    />
  );
};

export default Backdrop;
