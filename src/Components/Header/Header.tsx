import React, { useContext } from "react";
// import styled from "styled-components";
import { getColor } from "../../Utils/getColor";

import { Button } from "../Button/Button";
import { ThemeContext } from "../ThemeContext";

export interface HeaderProps {
  bg?: string;
}

export function Header({ bg }: HeaderProps) {
  const theme = useContext(ThemeContext);
  const headerColor = getColor(theme, bg);

  // const StyledHeader = styled.div`
  //   background-color: ${headerColor};
  //   padding: 20px 10px;
  //   display: flex;
  // `;

  // const HeaderRight = styled.div`
  //   flex-grow: 1;
  //   display: flex;
  //   justify-content: right;
  //   gap: 3px;
  // `;

  // const Logo = styled.div`
  //   font-size: 30px;
  //   padding-left: 20px;
  // `;

  return (
    <div>
      <div>Ripe Plan</div>
      <div>
        <Button bg={headerColor} color="black">
          Home
        </Button>
        <Button bg={headerColor} color="black">
          Products
        </Button>
        <Button bg={headerColor} color="black">
          Blog
        </Button>
      </div>
    </div>
  );
}

Header.defaultProps = {
  bg: null,
};
