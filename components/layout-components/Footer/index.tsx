import Image from 'next/image';
import Link from 'next/link';
import circleMap from '../../../assets/images/circle-map.png';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="flex">
          <div className="max-md:basis-1/2 basis-1/4">
            <div
              className="single-footer-widget"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="logo">
                <Link href="/">#LOGO</Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud.
                </p>
              </div>
              <ul className="social">
                <li>
                  <Link href="https://www.facebook.com/" target="_blank">
                    <i className="flaticon-facebook-letter-logo"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/" target="_blank">
                    <i className="flaticon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/" target="_blank">
                    <i className="flaticon-instagram-logo"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/" target="_blank">
                    <i className="flaticon-youtube-play-button"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-md:basis-1/2 basis-1/2">
            <div
              className="single-footer-widget"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <h3>Services</h3>
              <ul className="footer-services-list">
                <li>
                  <Link href="/cv-builder/">CV Builder</Link>
                </li>
                <li>
                  <Link href="/linkedin-reviewer/">Linked Reviewer</Link>
                </li>
                <li>
                  <Link href="/cv-reviewer/">CV Reviewer</Link>
                </li>
                <li>
                  <Link href="/cover-letter-writer/">Cover Letter Writer</Link>
                </li>
                <li>
                  <Link href="/recommendation-letter-writer/">Recommendation Letter Writer</Link>
                </li>
                <li>
                  <Link href="/job-application-writer/">Job Application Writer</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-md:basis-1/2 basis-1/2">
            <div
              className="single-footer-widget"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <h3>Quick Links</h3>
              <ul className="quick-links-list">
                <li>
                  <Link href="/about/">About Us</Link>
                </li>
                <li>
                  <Link href="/blog/">Blog</Link>
                </li>
                <li>
                  <Link href="/contact/">Contact</Link>
                </li>
                <li>
                  <Link href="/pricing/">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-md:basis-1/2 basis-1/4">
            <div
              className="single-footer-widget"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <h3>Contacts</h3>
              <ul className="footer-contact-list">
                <li>
                  <span>Address:</span>2750 Quadra Street <br /> Victoria, Canada
                </li>
                <li>
                  <span>Email:</span>bariton@gmail.com
                </li>
                <li>
                  <span>Phone:</span>+44 587 154756
                </li>
                <li>
                  <span>Fax:</span>+44 785 4578964
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="flex align-center">
            <div className="basis-1/2">
              <p>
                {'Copyright ©2023 Job Buddy. All Rights Reserved'}
                <Link href="/" target="_blank">
                  Job Buddy
                </Link>
                .
              </p>
            </div>
            <div className="basis-1/2">
              <ul>
                <li>
                  <Link href="/privacy-policy/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions/">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-map">
        <Image src={circleMap} alt="image" />
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </footer>
  );
};

export default Footer;
