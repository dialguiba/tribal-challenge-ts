interface Props {
  condition: boolean;
  wrapper: (children: any) => any;
  children: any;
}

export const ConditionalWrapper = ({ condition, wrapper, children }: Props) => (condition ? wrapper(children) : children);
