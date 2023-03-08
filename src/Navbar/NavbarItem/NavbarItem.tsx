import { createStyles, rem, Tooltip, UnstyledButton } from "@mantine/core";

interface NavbarItemProps {
  icon: React.FC<any>;
  label: string;
  color: string,
  active?: boolean;
  wide?: boolean;
  onClick?(): void;
}

export default function NavbarItem({ icon: Icon, color, label, active, wide, onClick }: NavbarItemProps) {
  const { classes, cx } = createStyles((theme) => ({
    link: {
      width: wide ? '100%' : rem(50),
      height: rem(50),
      borderRadius: rem(8),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.black,
      opacity: 0.85,
  
      '&:hover': {
        opacity: 1,
        backgroundColor: theme.fn.darken(
          color,
          0.1
        ),
      },
    },
  
    active: {
      opacity: 1,
      '&, &:hover': {
        backgroundColor: theme.fn.darken(
          color,
          0.15
        ),
      },
    },
  }))();
  return (
    wide ?
      (<UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
        {label}
      </UnstyledButton>)
      :
      (<Tooltip label={label} position="right" transitionProps={{ duration: 0 }} radius={rem(8)}>
        <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
          <Icon size="1.2rem" stroke={1.5} />
        </UnstyledButton>
      </Tooltip>)
  );

}