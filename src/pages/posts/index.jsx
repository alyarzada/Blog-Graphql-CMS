import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../graphql/queries/postQueries";
import BlogCard from "./components/BlogCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Posts = () => {
  const { data, loading, error } = useQuery(GET_POSTS);

  if (error)
    return (
      <div className="px-10px sm:px-50px mx-3 mt-4 bg-red-500 text-slate-50 w-fit py-1 px-3 rounded">
        Error: {error.message}
      </div>
    );

  return (
    <div className="px-10px md:px-50px mt-4">
      <div className="w-full sm:w-90% lg:w-60% xl:w-1/2 my-10 mx-auto text-center flex flex-col items-center gap-1 md:gap-2">
        <h1>Blog Application with Hygraph CMS</h1>
        <p className="text-slate-5 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ipsam
          aut voluptatibus quae, sit atque dolorem molestiae dolorum sunt
          exercitationem vero laboriosam magnam sint totam a harum eveniet velit
          delectus.
        </p>
        <button className="px-3 py-2 cursor-pointer hover:bg-pink-700 transition-all duration-400 bg-pink-500  rounded border-none">
          <a
            target="blank"
            className="no-underline text-slate-50"
            href="https://app.hygraph.com/8d735edfabcb4834b1e5fbe8a833b90b/master/content/595738ab07d848a084243d72177f89ee/view/f51a60206df44583a8e693c810d4b4a1/new"
          >
            Create new blog!
          </a>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="mx-auto my-8">
                <Skeleton className="rounded-xl" width={300} height={250} />
              </div>
            ))
          : data.posts.map((item) => <BlogCard {...item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Posts;
