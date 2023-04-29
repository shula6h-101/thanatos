import Image from 'next/image';
import { FC, Fragment } from 'react';
import dot1 from '../../assets/images/shape/dot1.png';
import dot2 from '../../assets/images/shape/dot2.png';
import shape1 from '../../assets/images/shape/shape1.png';
import shape2 from '../../assets/images/shape/shape2.svg';
import shape3 from '../../assets/images/shape/shape3.png';
import shape4 from '../../assets/images/shape/shape4.svg';
import shape5 from '../../assets/images/shape/shape5.svg';
import shape6 from '../../assets/images/shape/shape6.png';

const PatternAnimationBg: FC = () => {
  return (
    <Fragment>
      <div className="shape-img1">
        <Image src={shape1} alt="image" />
      </div>
      <div className="shape-img2">
        <Image src={shape2} alt="image" />
      </div>
      <div className="shape-img3">
        <Image src={shape3} alt="image" />
      </div>
      <div className="shape-img4">
        <Image src={shape4} alt="image" />
      </div>
      <div className="shape-img5">
        <Image src={shape5} alt="image" />
      </div>
      <div className="shape-img6">
        <Image src={shape6} alt="image" />
      </div>
      <div className="dot-shape1">
        <Image src={dot1} alt="image" />
      </div>
      <div className="dot-shape2">
        <Image src={dot2} alt="image" />
      </div>
    </Fragment>
  );
};

export default PatternAnimationBg;
