import React from "react";
import "./button.scoped.scss";

interface Props {
  backgroundColor?: string;
  textColor?: string;
  border?: string;
  width?: string;
  padding?: string;
  children?: React.ReactNode;
  [x: string]: any;
}

export const Button = ({ backgroundColor = "black", textColor = "white", border = "", width = "100%", padding = " 14px 24px", children, ...rest }: Props) => {
  const style = {
    "--textColor": textColor,
    "--backgroundColor": backgroundColor,
    "--border": border,
    "--width": width,
    "--padding": padding,
  } as React.CSSProperties;

  return (
    <button className="a-button" style={style} {...rest}>
      {children}
    </button>
  );
};
