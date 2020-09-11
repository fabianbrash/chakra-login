import React, { useState } from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    CircularProgress,
    Text
} from '@chakra-ui/core';
import { userLogin } from '../utils/mockApi';
import ErrorMessage from '../components/ErrorMessage';


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        //alert(`Email: ${email} & Password: ${password}`);
        try {
            await userLogin({ email, password });
            setisLoggedIn(true);
            setIsLoading(false);
        } catch(err) {
            setError('Invalid username or password');
            setIsLoading(false);
            //setEmail('');
            //setPassword('');
        }
    };

    return(

        <Flex width="full" align="center" justifyContent="center">
     
           <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
             <Box textAlign="center">
                 <Heading>Login</Heading>
             </Box>
             {isLoggedIn ? (
                 <Box textAlign="center">
                     <Text>{email} logged in!</Text>
                     <Button 
                     variantColor="orange" 
                     variant="outline" 
                     width="full" 
                     mt={2} 
                     onClick={() => {
                         setisLoggedIn(false);
                         setEmail('');
                         setPassword('');
                         setError('');
                     }
                        
                    }>
                     Sign out
                     </Button>
                    </Box>
             ) : (
            <>
            <Box my={4} textAlign="left">
                <form onSubmit={handleSubmit}>
                    {error && <ErrorMessage message={error} />}
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="test@test.com" onChange={event => setEmail(event.currentTarget.value)} />
                    </FormControl>
                    <FormControl mt={6} isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="**********" onChange={event => setPassword(event.currentTarget.value)} />
                    </FormControl>
                    <Button width="full" 
                    mt={4} 
                    leftIcon="lock" 
                    variantColor="purple" 
                    variant="outline" 
                    type="submit">
                        {isLoading ? (<CircularProgress isIndeterminate size="24px" color="purple" />) : ('Sign In')}
                    </Button>
                </form>
            </Box>
            </>
             )}
             <h4>Made with <span role="img" aria-label="rockets">🚀</span> and care by me. </h4>
          </Box>
        </Flex>   
    );

}

export default LoginForm;