import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {


  const {data:news} = useLoaderData()
  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">{news.length} News found in this Category</p>
      <div>
        {
          news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews} />)
        }
      </div>
    </div>
  );
};

export default CategoryNews;