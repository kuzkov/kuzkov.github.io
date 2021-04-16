import {
  Container,
  Text,
  Heading,
  HStack,
  Button,
  Box,
  Link,
} from '@chakra-ui/react';
import React from 'react';

const IndexPage = () => {
  return (
    <Container maxW="container.lg" mt="8">
      <Box mt="24" px={[4, 4, 8]} w={['100%', '100%', '70%']}>
        <Heading>Hello there! I'm a professional frontend engineer</Heading>
        <Text mt="4">
          I’m a hard working and dedicated professional front-end developer/user
          interface designer with a keen eye for detail, and a determination to
          deliver the very highest quality. I take great pride in my work, and I
          always try to better myself with every project I work on.
        </Text>
        <Text mt="2">
          I like to write semantic, cross browser compatible code by hand that
          is re-useable, maintainable and easy to understand.
        </Text>
        <Text mt="2">
          The main areas of my expertise are React, Angular and JavaScript but I
          have intermediate knowledge of Vue and Svelte.
        </Text>
        <Text mt="2">
          I have worked with a number of high profile clients (both directly and
          indirectly) and I am comfortable working under pressure to complex
          specifications.
        </Text>
        <Text mt="2">
          <Text fontWeight="bold">Interested in working with me?</Text>
          You can contact me in{' '}
          <Link color="teal.500" href="https://t.me/artyom_kuzkov" isExternal>
            telegram
          </Link>{' '}
          or{' '}
          <Link color="teal.500" href="mailto:fl.artyom.kuzkov@gmail.com">
            email
          </Link>
          ,{' '}
          <Link color="teal.500" href="https://github.com/kuzkov" isExternal>
            my github page
          </Link>
        </Text>
        <HStack mt="4">
          <Button colorScheme="teal" as="a" href="https://t.me/artyom_kuzkov">
            Contact me
          </Button>
          <Button colorScheme="teal" variant="ghost" as="a" href="/resume.pdf">
            Learn more
          </Button>
        </HStack>
      </Box>
    </Container>
  );
};

export default IndexPage;
