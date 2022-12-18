import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChatMessageInput from "./ChatMessageInput";
import "./ChatPage.css";

const ChatPage = () => {
  const data = useLoaderData();

  return (
    <div>
      {data?.messages?.map((topic) => (
        <div key={topic.id}>
          <div
            className={
              topic.type !== "FromUser"
                ? "actual-message-container all"
                : "onRight all"
            }
          >
            <h2>{topic.type}</h2>
            <h3>{topic.text}</h3>
            <p>{topic.creationTime}</p>
          </div>
        </div>
      ))}

      <ChatMessageInput />
    </div>
  );
};
export default ChatPage;
