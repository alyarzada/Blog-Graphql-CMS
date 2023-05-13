import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { isoFormatter } from "../../utils/isoFormatter";
import { GET_POSTS } from "../../graphql/queries/postQueries";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const Posts = () => {
  const { data, loading, error } = useQuery(GET_POSTS);
  const navigate = useNavigate();

  const editHandler = () => {};
  const deleteHandler = () => {};

  if (loading) return <div className="px-50px mt-4">Loading...</div>;
  if (error)
    return (
      <div className="px-50px mx-3 mt-4 bg-red-500 text-slate-50 w-fit py-1 px-3 rounded">
        Error: {error.message}
      </div>
    );

  return (
    <div className="px-50px mt-4">
      <h1>Posts</h1>
      <ul className="grid grid-cols-3">
        {data.posts.map(
          ({ id, title, author, createdAt, coverPhoto, slug }) => (
            <div
              className="relative rounded-xl cursor-pointer my-4 w-300px shadow-lg shadow-slate-300"
              onClick={() => navigate(`/posts/${slug}`)}
              key={id}
            >
              <img
                className="w-full object-fill rounded-t-xl"
                src={coverPhoto.url}
              />
              <div className="p-3 pb-4">
                <h4 className="mb-4">{title}</h4>
                <div className="flex items-center">
                  <img
                    className="rounded-full w-20px object-cover h-20px"
                    src={author.avatar.url}
                  />
                  <p className="flex-1 ml-2 font-medium">{author.username}</p>
                  <p className="font-semibold text-sm text-slate-600">
                    {isoFormatter(createdAt)}
                  </p>
                </div>

                <div className="flex rounded-lg px-2 py-1 bg-slate-300 absolute top-2 right-2 justify-end gap-x-1">
                  <div onClick={editHandler} className="cursor-pointer">
                    <BiEditAlt />
                  </div>
                  <div onClick={deleteHandler} className="cursor-pointer">
                    <BiTrash />
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </ul>
    </div>
  );
};

export default Posts;
