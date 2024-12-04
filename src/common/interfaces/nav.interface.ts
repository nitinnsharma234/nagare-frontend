import { ReactElement } from 'react';

export type NavListProps = {
  id?: string;
  title: string;
  path: string;
  icon?: ReactElement;
  info?: ReactElement;
  caption?: string;
  disabled?: boolean;
  roles?: string[];
  children?: {
    id?: string;
    title: string;
    path: string;
    children?: { id?: string; title: string; path: string }[];
  }[];
};

export interface NavSectionProps {
  isCollapse?: boolean;
  navConfig: {
    subheader: string;
    items: NavListProps[];
  }[];
}
