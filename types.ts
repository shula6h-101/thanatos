import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface SingleNavItem {
  id: string;
  name: string;
  path: string;
  icon?: ReactNode;
  nestedMenu?: Partial<SingleNavItem>[];
}

export interface Slide {
  id: number;
  content: string;
  altText: string;
  clientImage: StaticImageData;
  clientName: string;
  clientTitle?: string;
}
