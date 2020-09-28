import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from '@chakra-ui/core';

import {COMPANIES} from '../constants';

const Hero: React.FC = () => (
  <Flex
    direction='column'
    bg='gray.50'
    width='100%'
    minHeight='calc(100vh - 48px)'
    px={[2, 8, 8, 64]}
    py={16}
  >
    <SimpleGrid columns={[1, 1, 2]} spacing={10}>
      <Box order={[2, 2, 1, 1]}>
        <Text fontWeight='bold' color='blue.500' mb={8}>
          To Develop. Test. Improve.
        </Text>
        <Heading as='h1' mb={8} fontFamily='Dancing Script, cursive'>
          Extreme Programming
        </Heading>
        <Text mb={8} fontWeight='medium' color='gray.600' textAlign='justify'>
          My name is Pourya /'puryɒ/.
          <Text as='strong' mx={1}>
            I'm a senior frontend developer with over 6 years of experience
          </Text>
          <Tooltip
            aria-label=''
            label={'Malaysia, Singapore, Turkey, Iran, Spain, Germany and USA'}
            placement='top'
          >
            <Text id='planet-cursor' as='u' mr={1}>
              internationally
            </Text>
          </Tooltip>
          both in-office and remotely. I help companies build enterprise web
          applications based on a user-centric strategy, with the aim of
          innovating user experience.
        </Text>
        <Box mb={16}>
          <Tooltip
            label='Make an appointment on Calendly'
            aria-label='Make an appointment on Calendly'
            placement='top'
            showDelay={1000}
          >
            <Button
              variantColor='blue'
              rounded='2rem'
              mr={4}
              as='a'
              // @ts-ignore
              href='https://calendly.com/pourya7/30min'
              target='_blank'
            >
              Let's talk
            </Button>
          </Tooltip>
          <Button
            variant='ghost'
            rounded='2rem'
            color='blue.500'
            as='a'
            // @ts-ignore
            href='https://docs.google.com/document/d/1O1Gb5ex5qZaoJOz-RHR9TOhaZ4I5ZO9cRNx2Ga4eMdY/edit?usp=sharing'
            target='_blank'
          >
            Download my resumé
          </Button>
        </Box>
      </Box>
      <Box order={[1, 1, 2, 2]}>Image</Box>
    </SimpleGrid>
    <Flex wrap='wrap'>
      {COMPANIES.map(company => (
        <Image
          key={company.name}
          fallbackSrc={company.fallback}
          src={company.logo}
          alt={company.name}
          title={company.name}
          width='100px'
          objectFit='contain'
          mr={4}
        ></Image>
      ))}
    </Flex>
  </Flex>
);

export default Hero;
