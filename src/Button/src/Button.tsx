import React from 'react';
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ChakraButton {...props}>
    {children}
  </ChakraButton>
);

