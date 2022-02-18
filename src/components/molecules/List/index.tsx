import "./list.scoped.scss";

interface Props {
  vertical?: boolean;
  children?: any;
}

export const List = ({ vertical, children }: Props) => {
  const ulClasses = () => {
    let classList = ["m-list"];
    vertical && classList.push("--vertical");
    return classList.join(" ");
  };

  return <ul className={ulClasses()}>{children}</ul>;
};
