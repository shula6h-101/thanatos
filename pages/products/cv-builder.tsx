import { Fragment, ReactElement } from 'react';
import { NextPageWithLayout } from '../page';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import LineAnimationBackground from '../../components/shared-components/LineAnimationBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Layout = dynamic(() => import('../../components/layout-components/Layout'));

const CvBuilder: NextPageWithLayout = () => {
  return (
    <Fragment>
      <div className="page-title-area item-bg1">
        <div className="container">
          <div className="page-title-content">
            <h2>Products</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <FontAwesomeIcon className="mx-3 text-white" icon={faChevronRight} size="xs" />
              <li>CV Builder</li>
            </ul>
          </div>
        </div>
        <LineAnimationBackground />
      </div>
    </Fragment>
  );
};

CvBuilder.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CvBuilder;
