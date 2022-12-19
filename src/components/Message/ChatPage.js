import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChatMessageInput from "./ChatMessageInput";
import { AIRLINGO_ACCESS_TOKEN, API_URL } from "../../constants/contants";
import "./ChatPage.css";

const ChatPage = () => {
  // const data = useLoaderData()
  const [data, setData] = useState({ messages: [] });
  const { topicId } = useParams();

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
  }, [topicId]);

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

      <ChatMessageInput
        className="ChatMessageInputField"
        data={data}
        onMessagePost={() => getData()}
      />
    </div>
  );
};
export default ChatPage;
