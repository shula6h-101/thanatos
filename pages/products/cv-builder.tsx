import { Fragment, ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../page';
import dynamic from 'next/dynamic';
import { cvBuilderOptions } from '../../constants/common';
import Title from '../../components/layout-components/Title';
import Background1 from '../../assets/images/title-bg/page-title-bg1.jpg';

const Layout = dynamic(() => import('../../components/layout-components/Layout'));

const CvBuilder: NextPageWithLayout = () => {
  const [selected, setSelected] = useState('upload');
  return (
    <Fragment>
      <div className="py-[110px] md:max-lg:py-[90px]">
        <div className="container">
          <p className="text-lg font-medium">
            As experts in both AI and recruitment, we specialize in crafting CVs that not only
            impress human recruiters but also sail through the ATS software screening with ease. Let
            us help you improve your chances of getting noticed and land that dream job.
          </p>
          <div className="flex gap-x-8 mt-8 max-sm:flex-wrap">
            {cvBuilderOptions.map((option) => (
              <div key={option.id} className="max-sm:basis-full max-lg:basis-1/2 basis-1/2">
                <div
                  className={`single-main-services-box ${
                    selected === option.id ? 'single-main-services-box-active' : ''
                  }`}
                  onClick={() => setSelected(option.id)}
                >
                  <div className="icon">
                    <i className={option.iconClass} />
                  </div>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CvBuilder.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Title title="CV Builder" bgImage={Background1} />
      {page}
    </Layout>
  );
};

export default CvBuilder;
