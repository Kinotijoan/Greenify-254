import axiosInstance from "@/app/wasteless_app/axios";
import { useEffect, useState } from "react";

interface Comment {
  username: string;
  comment: string;
}

export const Comment = ({ username, comment }: Comment) => {
  return (
    <div className="flex flex-col mb-2">
      <p className="text-sm opacity-60">{username}</p>
      <p>{comment}</p>
    </div>
  );
};

const CommentList = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance
      .get(`/products/${postId}/comments`) // Replace :id with the actual product ID
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          // setComments(response.data);
        } else {
          setError("Unexpected response format.");
        }
      })
      .catch(() => {
        setError("Failed to load comments");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col max-h-[300px] overflow-auto mb-2">
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentList;
