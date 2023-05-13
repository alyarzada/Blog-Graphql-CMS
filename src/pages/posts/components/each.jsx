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

  console.log(data);

  return <div className="px-50px mt-4">{slug}</div>;
};

export default EachPost;
