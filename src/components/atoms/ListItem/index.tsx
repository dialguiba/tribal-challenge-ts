import React from "react";
import { ReactSVG } from "react-svg";
import "./list-item.scoped.scss";
import { Link } from "react-router-dom";
import { ConditionalWrapper } from "../ConditionalWrapper";

interface Props {
  text?: string;
  icon?: string;
  bold?: boolean;
  textColor?: string;
  route?: string;
  iconFillColor?: string;
  iconStrokeColor?: string;
  textHoverColor?: string;
}

export const ListItem = ({ text, icon, bold, textColor, route, iconFillColor = "", iconStrokeColor = "", textHoverColor = "#000000" }: Props) => {
  /* const formattedHref = (text) => text.replace(/ /g, "-").toLowerCase(); */
  const liStyles = {
    "--iconFillColor": iconFillColor,
    "--iconStrokeColor": iconStrokeColor,
    "--textHoverColor": textHoverColor,
  } as React.CSSProperties;

  const linkStyles = {
    "--textColor": textColor,
  } as React.CSSProperties;

  const textClasses = () => {
    if (bold) {
      return "a-listItem__text --bold";
    }
    return "a-listItem__text";
  };
  return (
    <li className="a-listItem" style={liStyles}>
      <ConditionalWrapper
        condition={!!route}
        wrapper={(children) => (
          <Link className={textClasses()} to={`/${route}`} style={linkStyles}>
            {children}
          </Link>
        )}
      >
        {icon && <ReactSVG src={`/icons/${icon}.svg`} className="a-listItem__icon" />}
        {text}
      </ConditionalWrapper>
    </li>
  );
};
