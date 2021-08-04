import * as React from 'react';

export type SelectItemProps = {
  value: string;
  title?: string;
  groupHeader?: boolean;
  disabled?: boolean;
};

export const SelectItem: React.FunctionComponent<SelectItemProps> = (props) => {
  const { title } = props;
  return <li>{title}</li>;
};
