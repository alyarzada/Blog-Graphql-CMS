import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../../graphql/queries/postQueries";

const EachPost = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POST, { variables: { slug } });

  if (loading) return <div className="px-50px mt-4">Loading...</div>;
  if (error)
    return (
      <div className="px-50px mx-3 mt-4 bg-red-500 text-slate-50 w-fit py-1 px-3 rounded">
        {error.message}
      </div>
    );

  return (
    <div className="px-50px flex items-center justify-center mt-4">
      <div className="w-60%">
        <img
          className="w-full rounded-xl"
          src={data.post.coverPhoto.url}
          alt=""
        />

        <h2 className="mb-4">{data.post.title}</h2>
        <p
          className="list-none"
          dangerouslySetInnerHTML={{ __html: data.post.content.html }}
        />
      </div>
    </div>
  );
};

export default EachPost;
