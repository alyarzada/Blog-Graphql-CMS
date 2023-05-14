import { useNavigate } from "react-router-dom";
import { isoFormatter } from "../../../utils/isoFormatter";
import { BiEditAlt, BiTrash } from "react-icons/bi";

const BlogCard = ({ title, author, createdAt, coverPhoto, slug }) => {
  const navigate = useNavigate();

  const editHandler = () => {};
  const deleteHandler = () => {};
  return (
    <div
      className="relative rounded-xl cursor-pointer my-4 w-300px shadow-lg shadow-slate-300"
      onClick={() => navigate(`/posts/${slug}`)}
    >
      <img className="w-full object-fill rounded-t-xl" src={coverPhoto.url} />
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
  );
};

export default BlogCard;
