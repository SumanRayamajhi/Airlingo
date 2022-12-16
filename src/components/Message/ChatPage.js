import { useLoaderData } from "react-router-dom";

const ChatPage = () => {
  const data = useLoaderData();

  return (
    <div>
      {data?.messages?.map((topic) => (
        <div key={topic.id}>
          <h2>{topic.type}</h2>
          <h3>{topic.text}</h3>
          <p>{topic.creationTime}</p>
        </div>
      ))}
    </div>
  );
};
export default ChatPage;
