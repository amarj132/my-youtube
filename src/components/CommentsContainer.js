import React from "react";

const comentsData = [
  {
    name: "amar",
    text: "sfsdgfjkdfgndfkjbd",
    replies: [],
  },
  {
    name: "amar",
    text: "sfsdgfjkdfgndfkjbd",
    replies: [
      { name: "amar", text: "sfsdgfjkdfgndfkjbd", replies: [] },
      {
        name: "amar",
        text: "sfsdgfjkdfgndfkjbd",
        replies: [{ name: "amar", text: "sfsdgfjkdfgndfkjbd", replies: [] }],
      },
      {
        name: "amar",
        text: "sfsdgfjkdfgndfkjbd",
        replies: [{ name: "amar", text: "sfsdgfjkdfgndfkjbd", replies: [] }],
      },
      {
        name: "amar",
        text: "sfsdgfjkdfgndfkjbd",
        replies: [
          { name: "amar", text: "sfsdgfjkdfgndfkjbd", replies: [] },
          { name: "amar", text: "sfsdgfjkdfgndfkjbd", replies: [] },
        ],
      },
    ],
  },
  {
    name: "amar",
    text: "sfsdgfjkdfgndfkjbd",
    replies: [],
  },
  {
    name: "amar",
    text: "sfsdgfjkdfgndfkjbd",
    replies: [],
  },
  {
    name: "amar",
    text: "sfsdgfjkdfgndfkjbd",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 ">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> Comments</h1>
      <CommentList comments={comentsData} />
    </div>
  );
};

export default CommentsContainer;
