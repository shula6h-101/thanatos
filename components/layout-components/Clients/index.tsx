import Image from 'next/image';
import React from 'react';
import client1 from '../../../assets/images/clients/client1.jpg';
import client2 from '../../../assets/images/clients/client2.jpg';
import client3 from '../../../assets/images/clients/client3.jpg';
import quote from '../../../assets/images/shape/quotes.svg';
import { Slide } from '../../../types';
import Carousel from '../../shared-components/Carousel';

const Clients = () => {
  const slides: Slide[] = [
    {
      key: 1,
      content:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour predefined words which dont look.',
      altText: 'Slide 1',
      clientImage: client1,
      clientName: 'Filip Luis',
      clientTitle: 'Founder & CEO',
    },
    {
      key: 2,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      altText: 'Slide 2',
      clientImage: client2,
      clientName: 'Koko Don',
      clientTitle: 'Intern',
    },
    {
      key: 3,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      altText: 'Slide 3',
      clientImage: client3,
      clientName: 'Pinki',
      clientTitle: 'Girlfriend',
    },
  ];
  const Slide = (slide: Slide) => {
    const { content, clientImage, clientName, clientTitle, key } = slide;
    return (
      <div className="flex">
        <div className="max-lg:basis-full basis-1/2">
          <div className="feedback-item">
            <Image src={quote} alt="quote" className="w-[10%] max-lg:m-auto" />
            <p>{content}</p>
            <div className="client-info">
              <div className="client-pic">
                <Image src={clientImage} alt="image" />
              </div>
              <h3>{clientName}</h3>
              <span>{clientTitle}</span>
            </div>
          </div>
        </div>
        <div className="max-lg:basis-0 basis-1/2">
          <div className={`client-image bg${key}`}>
            <Image src={clientImage} alt="image" />
          </div>
        </div>
      </div>
    );
  };

  return <Carousel slides={slides} renderSlide={Slide} />;
};

export default Clients;
