import React from "react";
import { createStyles, rem, Tooltip, UnstyledButton } from "@mantine/core";

interface NavbarItemProps {
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
  const { classes, cx } = createStyles((theme) => ({
    link: {
      width: wide ? "100%" : rem(50),
      height: rem(50),
      borderRadius: rem(8),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.black,
      opacity: 0.85,

      "&:hover": {
        opacity: 1,
        backgroundColor: theme.fn.darken(color, 0.1),
      },
    },

    active: {
      opacity: 1,
      "&, &:hover": {
        backgroundColor: theme.fn.darken(color, 0.15),
      },
    },
  }))();
  return wide ? (
    <UnstyledButton
      onClick={onClick}
      className={cx(classes.link, { [classes.active]: active })}
    >
      <div style={{ margin: "auto", display: "flex", width: "100%" }}>
        <div style={{ paddingRight: 10, paddingLeft: 10 }}>
          <Icon size="1.4rem" stroke={1.5} />
        </div>
        <div style={{ margin: "auto", flexGrow: 1 }}>{label}</div>
      </div>
    </UnstyledButton>
  ) : (
    <Tooltip
      label={label}
      position="right"
      transitionProps={{ duration: 0 }}
      radius={rem(8)}
    >
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

NavbarItem.defaultProps = {
  active: false,
  wide: false,
  onClick: () => {},
};
