import React, { useContext } from "react";
import { getBg, getPrimary, getShade } from "src/Utils/getColor";
import { ThemeContext } from "../ThemeContext";
import { listStyle } from "./List.styles";

export interface ListItem {
  name: string;
  value: string;
}

export interface ListProps extends React.HTMLProps<HTMLDivElement> {
  bg?: string;
  items?: ListItem[];
  outline?: string;
  itemClicked?(item: ListItem): void;
}

export function List({ bg, items, outline, itemClicked }: ListProps) {
  const theme = useContext(ThemeContext);
  const outlineColor = getPrimary(theme, outline);
  let listColor = getBg(theme, bg);
  listColor = getShade(listColor, -10);
  const hoverColor = getShade(listColor, -20);
  const listClass = listStyle(listColor, hoverColor, outlineColor, "white");

  if (items && items?.length > 0) {
    return (
      <div
        style={{
          color: "white",
          background: listColor,
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "10px" }}>
          {items.map((item) => (
            <div style={{ display: "flex" }}>
              <button
                type="button"
                className={listClass()}
                tabIndex={0}
                onClick={() => {
                  if (itemClicked) {
                    itemClicked(item);
                  }
                }}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <div />;
}

List.defaultProps = {
  bg: null,
  items: [],
  outline: null,
  itemClicked: () => {},
};
