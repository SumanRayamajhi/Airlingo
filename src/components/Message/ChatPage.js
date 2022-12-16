import { useLoaderData } from "react-router-dom";

const ChatPage = () => {
  const data = useLoaderData();
  console.log(data);
};
export default ChatPage;
