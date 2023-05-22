import { NextPage, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import error_404 from '../assets/images/error/404.png';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }: ErrorProps) => {
  if (statusCode === 404) {
    return (
      <div className="h-screen">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="flex flex-col items-center">
                <Image src={error_404} alt="error" />
                <h3>Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed had its name changed or is
                  temporarily unavailable.
                </p>
                <Link className="btn btn-primary" href="/">
                  Go To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <p>
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </p>
    );
  }
};

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
