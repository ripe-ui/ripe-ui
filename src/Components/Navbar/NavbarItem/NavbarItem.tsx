import React from "react";
import { createStyles, rem, Tooltip, UnstyledButton } from "@mantine/core";
import styled from "styled-components";

export interface NavbarItemProps {
  icon: React.FC<any>;
  label: string;
  color: string;
  active?: boolean;
  wide?: boolean;
  onClick?(): void;
}

export function NavbarItem({
  icon: Icon,
  color,
  label,
  active,
  wide,
  onClick,
}: NavbarItemProps) {
  const StyledButton = styled(UnstyledButton)<{
    children: any;
    onClick?(): void;
  }>`
    width: ${wide ? "100%" : "50px"} !important;
    height: 50px;
    border-radius: 8px;
    display: "flex";
    align-items: "center";
    justify-content: "center";
    color: "black";
    opacity: 0.85;
    margin: auto;

    svg {
      display: flex;
      width: 20px;
      height: 20px;
      margin: auto;
    }

    &:hover {
      opacity: 1;
      background-color: ${color} !important;
      filter: brightness(85%);
    }
  `;

  // const { classes, cx } = createStyles((theme) => ({
  //   link: {
  //     width: wide ? "100%" : rem(50),
  //     height: rem(50),
  //     borderRadius: rem(8),
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     color: theme.black,
  //     opacity: 0.85,

  //     "&:hover": {
  //       opacity: 1,
  //       backgroundColor: theme.fn.darken(color, 0.1),
  //     },
  //   },

  //   active: {
  //     opacity: 1,
  //     "&, &:hover": {
  //       backgroundColor: theme.fn.darken(color, 0.15),
  //     },
  //   },
  // }))();
  return wide ? (
    <StyledButton onClick={onClick}>
      <div style={{ margin: "auto", display: "flex", width: "100%" }}>
        <div style={{ paddingRight: 10, paddingLeft: 10 }}>
          <Icon size="20px" stroke={1.5} />
        </div>
        <div style={{ margin: "auto", flexGrow: 1 }}>{label}</div>
      </div>
    </StyledButton>
  ) : (
    <Tooltip
      label={label}
      position="right"
      transitionProps={{ duration: 0 }}
      radius={rem(8)}
    >
      <StyledButton onClick={onClick}>
        <Icon />
      </StyledButton>
    </Tooltip>
  );
}

NavbarItem.defaultProps = {
  active: false,
  wide: false,
  onClick: () => {},
};
