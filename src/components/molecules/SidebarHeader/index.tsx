import React from "react";
import { ReactComponent as Logo } from "@images/logo.svg";
import { Avatar } from "../../atoms/Avatar";
import "./sidebar-header.scoped.scss";

export const SidebarHeader = () => {
  return (
    <section className="m-sidebarHeader">
      <Logo />
      <Avatar initials="HB" />
    </section>
  );
};
