import Link from 'next/link';
import { FC } from 'react';
import { bannerContent } from '../../../constants/common';

const MainBanner: FC = () => {
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container-fluid">
            <div className="main-banner-content">
              <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                Job Profile Powered by Artificial Intelligence
              </h1>
              <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                We help job seekers succeed by creating standout CVs, optimizing LinkedIn profiles,
                and crafting compelling cover letters etc. With our professional services, you can
                make a great first impression and stand out in a crowded job market.
              </p>
              <div
                className="mt-8"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Link className="btn btn-primary" href="/products">
                  Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-services-area">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {bannerContent.map((item, i) => (
              <div
                key={item.id}
                className="max-sm:basis-full max-lg:basis-1/2 basis-1/3"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay={200 + i * 300}
              >
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className={item.iconClass} />
                  </div>
                  <h3 className="text-[23px] font-bold">{item.title}</h3>
                  <p>
                    Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
