import { Button, useColorMode } from '@chakra-ui/react';

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button size="sm" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  );
};

export default IndexPage;
