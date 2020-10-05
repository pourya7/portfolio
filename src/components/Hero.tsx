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
  useColorMode,
} from '@chakra-ui/core';

import {CALENDLY_LINK, COMPANIES, CV_LINK} from '../constants';

const Hero: React.FC = () => {
  const {colorMode} = useColorMode();
  return (
    <Flex
      direction='column'
      bg={colorMode === 'light' ? 'gray.50' : ''}
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
            Web Craftsman
          </Heading>
          <Text mb={8} fontWeight='medium' textAlign='justify'>
            My name is Pourya /'puryɒ/.
            <Text as='strong' mx={1}>
              I'm a senior frontend developer with over 6 years of experience
            </Text>
            <Tooltip
              aria-label=''
              label={
                'Malaysia, Singapore, Turkey, Iran, Spain, Germany and USA'
              }
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
            >
              <Button
                variantColor='blue'
                rounded='2rem'
                mr={4}
                as='a'
                // @ts-ignore
                href={CALENDLY_LINK}
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
              href={CV_LINK}
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
            src={colorMode === 'light' ? company.logoDark : company.logoLight}
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
};

export default Hero;
