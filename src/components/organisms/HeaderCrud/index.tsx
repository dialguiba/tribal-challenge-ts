import "./header-crud.scoped.scss";

import { useMobile } from "@hooks/useMobile";

interface Props {
  title?: string;
  children?: any;
  responsive?: boolean;
  actions?: any;
}

export const HeaderCrud = ({ title, children, responsive, actions }: Props) => {
  const [isMobile] = useMobile();

  return (
    <div className={isMobile && responsive ? "o-headerCrud --mobile" : "o-headerCrud"}>
      <div className="o-headerCrud__principal">
        <h2 className={isMobile && responsive ? "o-headerCrud__title --mobile" : "o-headerCrud__title"}>{title}</h2>
        <div className="o-headerCrud__actions">{actions}</div>
      </div>
      <div className="o-headerCrud__secondary">{children}</div>
    </div>
  );
};
