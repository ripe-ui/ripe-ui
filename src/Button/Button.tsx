import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps, rem } from '@mantine/core';


interface ButtonProps extends MantineButtonProps {
  buttonColor: string;
  textColor: string;
}

export const Button: React.FC<ButtonProps> = ({ buttonColor, textColor, children, ...props }) => (
  <MantineButton
    styles={(theme) => ({
      root: {
        backgroundColor: buttonColor,
        color: textColor,
        border: 0,
        borderRadius: rem(8),
        height: rem(42),
        paddingLeft: rem(20),
        paddingRight: rem(20),
        '&:not([data-disabled])': theme.fn.hover({
          backgroundColor: theme.fn.darken(buttonColor, 0.02),
        }),
      },
    })}>
    {children}
  </MantineButton>
);