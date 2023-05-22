import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import LineAnimationBackground from '../../shared-components/LineAnimationBackground';
import { StaticImageData } from 'next/image';

interface TitleProps {
  title: string;
  bgImage: StaticImageData;
}

const Title = ({ title, bgImage }: TitleProps) => {
  return (
    <div className="page-title-area" style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="container">
        <div className="page-title-content">
          <h2>{title}</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <FontAwesomeIcon className="mx-3 text-white" icon={faChevronRight} size="xs" />
            <li>{title}</li>
          </ul>
        </div>
      </div>
      <LineAnimationBackground />
    </div>
  );
};

export default Title;
