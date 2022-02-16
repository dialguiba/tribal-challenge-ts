import { List } from "@components/molecules/List";
import { SidebarHeader } from "components/molecules/SidebarHeader";
import React from "react";
import { ListItem } from "components/atoms/ListItem";
import "./sidebar.scoped.scss";

interface Props {
  bodyData: any;
  footerData: any;
}

export const Sidebar = ({ bodyData, footerData }: Props) => {
  return (
    <aside className="o-sidebar">
      <section className="o-sidebar__header">
        <SidebarHeader />
      </section>
      <section className="o-sidebar__menu">
        <List vertical>
          {React.Children.toArray(
            bodyData.map((item: Record<string, string>) => {
              return <ListItem text={item.text} icon={item.icon} textColor={item.textColor} route={item.route} bold />;
            })
          )}
          {/* <ListItem text="Overview" icon="squares" bold textColor="#6b6e74" />
          <ListItem text="Tribal Pay" icon="bank" bold textColor="#6b6e74" />
          <ListItem text="Tribal Credit" icon="credit-card" bold textColor="#6b6e74" />
          <ListItem text="Payments" icon="dollar" bold textColor="#6b6e74" />
          <ListItem text="Notifications" icon="bell" bold textColor="#6b6e74" />
          <ListItem text="Users" icon="user" bold textColor="#6b6e74" /> */}
        </List>
      </section>
      <section className="o-sidebar__footer">
        <List>
          {React.Children.toArray(
            footerData.map((item: Record<string, string>) => {
              return <ListItem text={item.text} textColor={item.textColor} />;
            })
          )}
          {/*  <ListItem text="Legal" textColor="#6b6e74" />
          <ListItem text="FAQ" textColor="#6b6e74" />
          <ListItem text="Support" textColor="#6b6e74" /> */}
        </List>
      </section>
    </aside>
  );
};
