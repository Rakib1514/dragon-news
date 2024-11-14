import PropTypes from 'prop-types';
import { FaShareAlt, FaEye, FaStar, FaBookmark } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 my-6 bg-white">
      {/* Author Info */}
      <div className="flex items-center mb-4">
        <img src={news.author.img} alt="Author" className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h4 className="text-sm font-semibold">{news.author.name}</h4>
          <p className="text-xs text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto flex items-center space-x-2 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{news.title}</h2>

      {/* Image */}
      <img src={news.image_url} alt="News" className="w-full rounded-lg mb-4" />

      {/* Details */}
      <p className="text-sm text-gray-600 mb-2">
        {news.details.slice(0, 150)}...
        <span className="text-blue-500 cursor-pointer">Read More</span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <span className="font-semibold text-sm">{news.rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span className="text-sm">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsCard;
