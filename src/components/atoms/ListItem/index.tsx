import React from "react";
import { ReactSVG } from "react-svg";
import "./list-item.scoped.scss";
import { NavLink } from "react-router-dom";
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
  const liStyles = {
    "--iconFillColor": iconFillColor,
    "--iconStrokeColor": iconStrokeColor,
    "--textHoverColor": textHoverColor,
  } as React.CSSProperties;

  const linkStyles = {
    "--textColor": textColor,
  } as React.CSSProperties;

  const textClasses = (isActive: boolean) => {
    let classes = "a-listItem__text";

    if (bold) classes += " --bold";
    if (isActive) classes += " --active";

    return classes;
  };
  return (
    <ConditionalWrapper
      condition={!!route}
      wrapper={(children) => (
        <NavLink className={(state) => textClasses(state.isActive)} to={`/${route}`} style={linkStyles}>
          {children}
        </NavLink>
      )}
    >
      <li className="a-listItem" style={liStyles}>
        {icon && <ReactSVG src={`/icons/${icon}.svg`} className="a-listItem__icon" />}
        {text}
      </li>
    </ConditionalWrapper>
  );
};
