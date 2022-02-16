import React from "react";
import "./list.scoped.scss";

interface Props {
  data?: any;
  vertical?: boolean;
  children?: any;
}

export const List = ({ data, vertical, children }: Props) => {
  const ulClasses = () => {
    let classList = ["m-list"];
    vertical && classList.push("--vertical");
    return classList.join(" ");
  };

  return <ul className={ulClasses()}>{children}</ul>;
};
