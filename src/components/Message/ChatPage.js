import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatMessageInput from "./ChatMessageInput";
import { AIRLINGO_ACCESS_TOKEN, API_URL } from "../../constants/contants";
import { TiDelete } from "react-icons/ti";
import "./ChatPage.css";

const ChatPage = () => {
  // const data = useLoaderData()
  const [data, setData] = useState({ messages: [] });
  const { topicId } = useParams();

  // var clicks = [];
  // var time = "";

  // const doubleClick = (e) => {
  //   e.preventDefault();
  //   clicks.push(new Date().getTime());
  //   window.clearTimeout(time);
  //   time = window.setTimeout(() => {
  //     if (
  //       clicks.length > 1 &&
  //       clicks[clicks.length - 1] - clicks[clicks.length - 2] < 500
  //     ) {
  //       <TiDelete />;
  //       <button style={{ height: "3rem", width: "3rem", background: "red" }}>
  //         Delete
  //       </button>;
  //     }
  //   }, 500);
  // };

  const getData = async () => {
    if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN)) {
      const resp = await fetch(`${API_URL}/api/topics/${topicId}/messages`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            AIRLINGO_ACCESS_TOKEN
          )}`,
        },
      });
      const data = await resp.json();
      setData(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteMessage = async () => {
    if (localStorage.getItem(AIRLINGO_ACCESS_TOKEN)) {
      const resp = await fetch(`${API_URL}/api/topics/${topicId}/messages`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            AIRLINGO_ACCESS_TOKEN
          )}`,
        },
      });
      getData();
    }
  };

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
            <TiDelete
              style={{
                height: "2rem",
                width: "2rem",
                color: "white",
              }}
              onClick={() => deleteMessage(topic.id)}
            />
            <h2>{topic.type}</h2>
            <h3>{topic.text}</h3>
            <p>{topic.creationTime}</p>
          </div>
        </div>
      ))}

      <ChatMessageInput
        className="ChatMessageInputField"
        data={data}
        onMessagePost={() => getData()}
      />
    </div>
  );
};
export default ChatPage;
