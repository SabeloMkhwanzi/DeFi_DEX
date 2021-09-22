import { Menu, Button, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Box, Heading, Flex} from "@chakra-ui/react";
import React from "react";
import { useMoralis } from 'react-moralis';



function App() {
  const { authenticate, isAuthenticated, isAuthenticating, authError, logout } = useMoralis();
   
  if (isAuthenticated) {
    return (
      <Menu>
        <Heading>Welcome to the Dex Exchange</Heading>
        <Button onClick={() => logout()}>logout</Button>
      </Menu>
    );
  }


  return (
    <Menu>
      Dex Exchange
      {authError && (
        <Alert status="error">
         <AlertIcon />
          <Box flex="1">
           <AlertTitle>Authentication has failed</AlertTitle>
            <AlertDescription display="block">{authError.message}</AlertDescription>
           </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
      )}
      <Flex justifyContent="flex-end" pr="2">     
        <Button size="md"
         height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
        direction="row"
        isLoading={isAuthenticating}
        onClick={() =>
        authenticate()}>
        Authenticate
      </Button>
      </Flex>
    </Menu>
  );
}

export default App;
