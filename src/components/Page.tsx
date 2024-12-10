
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

export interface IProps {
  title: string;
  meta: ReactNode;
  children: ReactNode;
}

const Page = ({ title }: IProps) => {
  <>
    <Helmet>
      <title>{`${title} | Nagare`}</title>
    </Helmet>
  </>;
};

export default Page;