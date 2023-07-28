import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      
      <img
        className="h-8"
        alt="user-icon"
        src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg"
      />
      <span className="font-bold px-2"> {name}</span>
      <span> {message}</span>
    </div>
  );
};

export default ChatMessage;
