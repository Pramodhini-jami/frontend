// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, FormHelperText, Input, Stack, Heading } from '@chakra-ui/react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for routing

// const api = 'YOUR_API_ENDPOINT_HERE';  // Replace with your API endpoint

// export const SignIn = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();  // Hook for navigation

//   const signIn = async () => {
//     try {
//       const response = await axios.post(`${api}/signin`, { name, password });
//       if (response.data.message) {
//         console.log(response.data.values);
//         alert('Login successful');
//         // Redirect or perform another action after successful login
//       } else {
//         alert('User not found');
//         navigate('/signup');  // Redirect to signup page
//       }
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred during login');
//     }
//   };

//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//       bg="gray.50"
//     >
//       <Box
//         p={8}
//         borderWidth={1}
//         borderRadius="md"
//         boxShadow="lg"
//         bg="white"
//         width={{ base: "90%", sm: "400px" }}
//       >
//         <Heading mb={6} size="lg" textAlign="center">
//           Sign In
//         </Heading>
//         <Stack spacing={4}>
//           <FormControl>
//             <FormLabel>Email address</FormLabel>
//             <Input 
//               type="email" 
//               placeholder="Enter your email" 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <FormHelperText>We'll never share your email.</FormHelperText>
//           </FormControl>
//           <FormControl>
//             <FormLabel>Password</FormLabel>
//             <Input 
//               type="password" 
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <FormHelperText>
//               Forgot your password? 
//               <Link to="/forgetpassword" style={{ color: '#3182ce', textDecoration: 'underline' }}> Update Password</Link>
//             </FormHelperText>
//           </FormControl>
//           <Button colorScheme="green" mt={4} width="full" onClick={signIn}>
//             Sign In
//           </Button>
//           <FormHelperText mt={4}>
//             Don't have an account? 
//             <Button colorScheme="red" ml={2} onClick={() => navigate('/signup')}>Sign Up</Button>
//           </FormHelperText>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, FormHelperText, Input, Stack, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for routing

const api = 'YOUR_API_ENDPOINT_HERE';  // Replace with your API endpoint

export const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook for navigation

  const signIn = async () => {
    try {
      const response = await axios.post(`${api}/signin`, { name, password });
      if (response.data.message) {
        console.log(response.data.values);
        alert('Login successful');
        // Redirect or perform another action after successful login
        // For example: navigate('/dashboard');
      } else {
        alert('User not found');
        navigate('/signup');  // Redirect to signup page
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during login');
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.50"
    >
      <Box
        p={8}
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
        bg="white"
        width={{ base: "90%", sm: "400px" }}
      >
        <Heading mb={6} size="lg" textAlign="center">
          Sign In
        </Heading>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>
              Forgot your password? 
              <Link to="/forgetpassword" style={{ color: '#3182ce', textDecoration: 'underline' }}> Update Password</Link>
            </FormHelperText>
          </FormControl>
          <Button colorScheme="green" mt={4} width="full" onClick={signIn}>
            Sign In
          </Button>
          <Box mt={4} textAlign="center">
            <FormHelperText>
              Don't have an account? 
              <Button colorScheme="red" ml={2} onClick={() => navigate('/signup')}>Sign Up</Button>
            </FormHelperText>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
