import { ReactComponent as Logo } from "@images/logo.svg";
import { Avatar } from "@components/atoms/Avatar";
import "./sidebar-header.scoped.scss";

export const SidebarHeader = () => {
  return (
    <section className="m-sidebarHeader">
      <Logo />
      <Avatar initials="HB" />
    </section>
  );
};
