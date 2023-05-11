import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface SubMenu {
  key: string;
  label: string;
  path: string;
  icon?: ReactNode;
}

export interface SingleNavItem {
  key: string;
  label: string;
  path: string;
  icon?: ReactNode;
  nestedMenu?: SubMenu[];
}

export interface Slide {
  key: number;
  content: string;
  altText: string;
  clientImage: StaticImageData;
  clientName: string;
  clientTitle?: string;
}
