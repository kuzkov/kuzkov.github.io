import { Container, Text, Heading, HStack, Button } from '@chakra-ui/react';
import React from 'react';

const IndexPage = () => {
  return (
    <Container maxW="container.md" mt="8">
      <Heading>Hello there! I'm a professional frontend engineer</Heading>
      <Text mt="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur met
        eu animi, sit vel id quae esse illum!Similique dolor sunt atque
        cupiditate nostrum distinctio quia fuga explicabo quae! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Qui dicta eius autem
        temporibus beatae quo error ut amet. Cupiditate obcaecati voluptas
        cumque hic ipsum, autem impedit eaque asperiores blanditiis aut. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Enim fuga sed
        distinctio dolores doloremque omnis ut. Numquam dolorum, provident,
        adipisci incidunt at eos placeat ea illo vel, quaerat voluptatibus
        rerum!
      </Text>
      <HStack mt="4">
        <Button colorScheme="teal">Contact me</Button>
        <Button colorScheme="teal" variant="ghost">
          Learn more
        </Button>
      </HStack>
    </Container>
  );
};

export default IndexPage;
