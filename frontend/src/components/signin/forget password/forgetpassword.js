// import React from 'react';
// import { Box, Button, FormControl, FormLabel, FormHelperText, Input, Textarea, Stack, Heading } from '@chakra-ui/react';

// export const ForgotPassword = () => {
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
//           Forgot Password
//         </Heading>
//         <Stack spacing={4}>
//           {/* Email Address */}
//           <FormControl>
//             <FormLabel>Email address</FormLabel>
//             <Input type="email" placeholder="Enter your email" />
//             <FormHelperText>We'll send a verification code to this email.</FormHelperText>
//           </FormControl>

//           {/* Verification Code */}
//           <FormControl>
//             <FormLabel>Verification Code</FormLabel>
//             <Input type="text" placeholder="Enter verification code" />
//             <FormHelperText>The code was sent to your email.</FormHelperText>
//           </FormControl>

//           {/* New Password */}
//           <FormControl>
//             <FormLabel>New Password</FormLabel>
//             <Input
//               type="password"
//               placeholder="Enter a new password"
//               // Add any additional props here for validation if needed
//             />
//             <FormHelperText>
//               Password must be at least 8 characters long, include one capital letter, one symbol, and one number.
//             </FormHelperText>
//           </FormControl>

//           {/* Additional Information */}
//           <FormControl>
//             <FormLabel>Additional Information</FormLabel>
//             <Textarea placeholder="Additional notes (optional)" />
//           </FormControl>

//           {/* Submit Button */}
//           <Button colorScheme="blue" mt={4} width="full">
//             Submit
//           </Button>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Stack,
  Heading,
  Collapse,
} from '@chakra-ui/react';

export const ForgotPassword = () => {
  const [showRules, setShowRules] = useState(false);

  const handlePasswordFocus = () => setShowRules(true);
  const handlePasswordBlur = () => setShowRules(false);

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
          Forgot Password
        </Heading>
        <Stack spacing={4}>
          {/* Email Address */}
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
            <FormHelperText>We'll send a verification code to this email.</FormHelperText>
          </FormControl>

          {/* Verification Code */}
          <FormControl>
            <FormLabel>Verification Code</FormLabel>
            <Input type="text" placeholder="Enter verification code" />
            <FormHelperText>The code was sent to your email.</FormHelperText>
          </FormControl>

          {/* New Password */}
          <FormControl>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter a new password"
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            <Collapse in={showRules}>
              <FormHelperText mt={2}>
                Password must be at least 8 characters long, include one capital letter, one symbol, and one number.
              </FormHelperText>
            </Collapse>
          </FormControl>

          {/* Confirm Password */}
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your new password"
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
            <Collapse in={showRules}>
              <FormHelperText mt={2}>
                Ensure the passwords match and follow the specified rules.
              </FormHelperText>
            </Collapse>
          </FormControl>

          {/* Additional Information */}
          <FormControl>
            <FormLabel>Additional Information</FormLabel>
            <Textarea placeholder="Additional notes (optional)" />
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="blue" mt={4} width="full">
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
