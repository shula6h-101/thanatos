import { ReactNode } from 'react';

export type SingleNavItem = {
  id: string;
  name: string;
  path: string;
  icon?: ReactNode;
  nestedMenu?: Partial<SingleNavItem>[];
};
