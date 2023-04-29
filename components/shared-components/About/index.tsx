import { FC } from 'react';
import Image from 'next/image';
import about1 from '../../../assets/images/about/about1.jpg';
import about2 from '../../../assets/images/about/about2.jpg';
import Link from 'next/link';
import PatternAnimationBg from '../PatternAnimationBg';

const About: FC = () => {
  return (
    <section className="about-area py-[110px] md:max-lg:py-[90px]">
      <div className="container">
        <div className="flex align-items-center gap-12 max-lg:flex-col">
          <div className="max-md:basis-full basis-1/2 max-lg:order-2">
            <div className="about-image">
              <Image
                src={about1}
                alt="image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="sm:max-md:h-[17rem]"
              />
              <Image
                src={about2}
                alt="image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
                className="sm:max-md:h-[17rem]"
              />
            </div>
          </div>
          <div className="max-md:basis-full basis-1/2">
            <div
              className="about-content"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <h2>Now leverage the power of AI to create awesome profiles</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                dont look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isnt.
              </p>
              <Link className="btn btn-primary" href="/home">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PatternAnimationBg />
    </section>
  );
};

export default About;
