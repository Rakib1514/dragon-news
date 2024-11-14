import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'} />
      },
      {
        path: '/category/:category_id',
        element: <CategoryNews/>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`)
      },
    ]
  },
  {
    path: 'news',
    element: <h2>News section</h2>
  },
  {
    path: 'auth',
    element: <h2>Authentication</h2>
  },
  {
    path: '*',
    element: <h2>Error page</h2>
  }
])

export default router;