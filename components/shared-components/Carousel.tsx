import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { FC } from 'react';
import { Slide } from '../../types';

export interface CarouselProps {
  slides: Slide[];
  renderSlide: any;
}

const Carousel: FC<CarouselProps> = ({ slides, renderSlide }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>{renderSlide(slide)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
