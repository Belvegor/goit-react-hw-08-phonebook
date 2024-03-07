import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>hw8 - not found page</title>
      </Helmet>
      <div>
        <h2>
          Page doesn't exist
        </h2>
        <button>
          <Link to="/">
            Back to main page
          </Link>
        </button>
      </div>
    </>
  );
};