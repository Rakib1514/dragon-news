import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-btnClr text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
