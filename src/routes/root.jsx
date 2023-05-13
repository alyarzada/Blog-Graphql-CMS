import { createBrowserRouter } from "react-router-dom";
import Root from "../layout";
import Posts from "../pages/posts";
import EachPost from "../pages/posts/components/each";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "posts/:slug",
        element: <EachPost />,
      },
    ],
  },
]);
