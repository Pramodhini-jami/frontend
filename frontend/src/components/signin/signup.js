// import React from 'react';
// import { Box, Button, FormControl, FormLabel, FormHelperText, Input, Textarea, Stack, Heading } from '@chakra-ui/react';

// export const SignUp = () => {
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
//           Sign Up
//         </Heading>
//         <Stack spacing={4}>
//           {/* Email Address */}
//           <FormControl>
//             <FormLabel>Email address</FormLabel>
//             <Input type="email" placeholder="Enter your email" />
//             <FormHelperText>We'll never share your email.</FormHelperText>
//           </FormControl>

//           {/* Create Password */}
//           <FormControl>
//             <FormLabel>Create Password</FormLabel>
//             <Input type="password" placeholder="Create a password" />
//           </FormControl>

//           {/* Confirm Password */}
//           <FormControl>
//             <FormLabel>Confirm Password</FormLabel>
//             <Input type="password" placeholder="Confirm your password" />
//           </FormControl>

//           {/* Verification Code */}
//           <FormControl>
//             <FormLabel>Verification Code</FormLabel>
//             <Input type="text" placeholder="Enter verification code" />
//             <FormHelperText>A code has been sent to your email.</FormHelperText>
//           </FormControl>

//           {/* Additional Information */}
//           <FormControl>
//             <FormLabel>Additional Information</FormLabel>
//             <Textarea placeholder="Additional notes (optional)" />
//           </FormControl>

//           {/* Sign Up Button */}
//           <Button colorScheme="green" mt={4} width="full">
//             Sign Up
//           </Button>
//           <p>already have an account?<Button colorScheme="blue" mt={2} width="full">signIn</Button></p>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, FormHelperText, Input, Textarea, Stack, Heading } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const navigate = useNavigate();  // Hook for navigation

  const handleSignUp = () => {
    // Add validation and sign-up logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Simulate a sign-up request
    console.log({
      email,
      password,
      verificationCode,
      additionalInfo
    });

    alert('Sign Up Successful');
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
          Sign Up
        </Heading>
        <Stack spacing={4}>
          {/* Email Address */}
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          {/* Create Password */}
          <FormControl>
            <FormLabel>Create Password</FormLabel>
            <Input 
              type="password" 
              placeholder="Create a password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {/* Confirm Password */}
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input 
              type="password" 
              placeholder="Confirm your password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          {/* Verification Code */}
          <FormControl>
            <FormLabel>Verification Code</FormLabel>
            <Input 
              type="text" 
              placeholder="Enter verification code" 
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <FormHelperText>A code has been sent to your email.</FormHelperText>
          </FormControl>

          {/* Additional Information */}
          <FormControl>
            <FormLabel>Additional Information</FormLabel>
            <Textarea 
              placeholder="Additional notes (optional)" 
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </FormControl>

          {/* Sign Up Button */}
          <Button colorScheme="green" mt={4} width="full" onClick={handleSignUp}>
            Sign Up
          </Button>

          {/* Navigation to Sign In */}
          <Box mt={4} textAlign="center">
            <p>Already have an account? 
              <Link to="/signin" style={{ color: '#3182ce', textDecoration: 'underline' }}> Sign In</Link>
            </p>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};



