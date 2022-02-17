import { List } from "@components/molecules/List";
import { SidebarHeader } from "@components/molecules/SidebarHeader";
import React from "react";
import { ListItem } from "@components/atoms/ListItem";
import "./sidebar.scoped.scss";

interface Props {
  staticData: any;
}

export const Sidebar = ({ staticData }: Props) => {
  return (
    <aside className="o-sidebar">
      <section className="o-sidebar__header">
        <SidebarHeader />
      </section>
      <section className="o-sidebar__menu">
        <List vertical>
          {React.Children.toArray(
            staticData.body.map((item: Record<string, string>) => {
              return <ListItem text={item.text} icon={item.icon} textColor={item.textColor} route={item.route} bold />;
            })
          )}
        </List>
      </section>
      <section className="o-sidebar__footer">
        <List>
          {React.Children.toArray(
            staticData.footer.map((item: Record<string, string>) => {
              return <ListItem text={item.text} textColor={item.textColor} />;
            })
          )}
        </List>
      </section>
    </aside>
  );
};
