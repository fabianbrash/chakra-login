import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/core';


const LoginForm = () => {

    return(

        <Flex width="full" align="center" justifyContent="center">
     
           <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
             <Box textAlign="center">
                 <Heading>Login</Heading>
             </Box>
            <Box my={4} textAlign="left">
                <form>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="test@test.com" />
                    </FormControl>
                    <FormControl mt={6} isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="**********" />
                    </FormControl>
                    <Button width="full" mt={4} variantColor="teal" variant="outline" type="submit">Sign In</Button>
                </form>
            </Box>
          </Box>
        </Flex>
          
    );

}

export default LoginForm;