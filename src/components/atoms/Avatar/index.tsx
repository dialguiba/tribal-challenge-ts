import React from "react";
import "./avatar.scoped.scss";
import { ReactComponent as Arrow } from "@icons/arrow.svg";

interface Props {
  initials: string;
}

export const Avatar = ({ initials = "" }: Props) => {
  return (
    <div className="a-avatar">
      <div className="a-avatar__circle">{initials.toUpperCase()}</div>
      <Arrow className="a-avatar__arrow" />
    </div>
  );
};
