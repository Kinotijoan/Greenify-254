export const Comment = ({
  username,
  comment,
}: {
  username: string;
  comment: string;
}) => {
  return (
    <div className="flex flex-col mb-2 ">
      <p className="text-sm opacity-60">{username}</p>
      <p className="">{comment}</p>
    </div>
  );
};

const CommentList = () => {
  const comments = [
    {
      username: "comfort",
      comment: "We all get one life",
    },
    {
      username: "sandrah",
      comment: "Live it to the fullest",
    },
    {
      username: "comfort",
      comment: "We all get one life",
    },
    {
      username: "sandrah",
      comment: "Live it to the fullest",
    },
    {
      username: "comfort",
      comment: "We all get one life",
    },
    {
      username: "sandrah",
      comment: "Live it to the fullest",
    },
    {
      username: "comfort",
      comment: "We all get one life",
    },
    {
      username: "sandrah",
      comment: "Live it to the fullest",
    },
    {
      username: "comfort",
      comment: "We all get one life",
    },
    {
      username: "sandrah",
      comment: "Live it to the fullest",
    },
  ];
  return (
    <div className="flex flex-col max-h-[300px] overflow-auto mb-2">
      {comments.map(({ username, comment }, index) => (
        <Comment username={username} comment={comment} />
      ))}
    </div>
  );
};
export default CommentList;
